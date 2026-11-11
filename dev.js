const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');

const PORT = process.env.PORT || 3000;
const ROOT = process.cwd();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon'
};

const clients = new Set();

function broadcastReload() {
  for (const res of clients) {
    res.write('data: reload\n\n');
  }
}

const server = http.createServer((req, res) => {
  if (req.url === '/__livereload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    res.write('\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(ROOT, reqPath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      if (ext === '.html') {
        const injectScript = `
<script>
  (() => {
    const es = new EventSource('/__livereload');
    es.onmessage = (e) => {
      if (e.data === 'reload') {
        console.log('[live-reload] File changed, reloading...');
        location.reload();
      }
    };
    es.onerror = () => {
      setTimeout(() => new EventSource('/__livereload'), 2000);
    };
  })();
</script>
</body>`;
        const html = content.toString('utf-8').replace('</body>', injectScript);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(html);
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });
});

let reloadTimeout = null;
function scheduleReload() {
  clearTimeout(reloadTimeout);
  reloadTimeout = setTimeout(() => {
    broadcastReload();
  }, 120);
}

// Watch styles directory for min.css updates and index.html
if (fs.existsSync(path.join(ROOT, 'styles'))) {
  fs.watch(path.join(ROOT, 'styles'), (eventType, filename) => {
    if (filename && filename.endsWith('.min.css')) {
      scheduleReload();
    }
  });
}
if (fs.existsSync(path.join(ROOT, 'index.html'))) {
  fs.watch(path.join(ROOT, 'index.html'), () => scheduleReload());
}

// Spawn Sass compiler in watch mode
const sassProcess = spawn('npm', ['run', 'sass:watch'], {
  stdio: 'inherit',
  shell: true
});

sassProcess.on('error', (err) => {
  console.error('[sass watch error]', err.message);
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n=================================================`);
  console.log(`  Modern Dimenssions - Local Development Server  `);
  console.log(`=================================================`);
  console.log(`  > Local URL:     ${url}`);
  console.log(`  > Sass Watcher:  styles/main.scss -> styles/main.min.css`);
  console.log(`  > Live Reload:   Active`);
  console.log(`  > Press Ctrl+C to stop`);
  console.log(`=================================================\n`);

  if (process.platform === 'win32') {
    exec(`start ${url}`);
  }
});

function cleanup() {
  if (sassProcess) {
    try {
      sassProcess.kill();
    } catch (_) {}
  }
  process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

