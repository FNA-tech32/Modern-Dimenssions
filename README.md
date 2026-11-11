# Modern Dimenssions

A modern, high-performance, and fully responsive digital marketing agency landing page built with semantic HTML5, modular SCSS (Sass), and strict adherence to the BEM (Block Element Modifier) methodology. Designed for pixel-perfect presentation, fast loading times, and an engaging user experience across all devices.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Key Features & Website Sections](#key-features--website-sections)
- [Brand Identity & Contact Details](#brand-identity--contact-details)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Design System & Code Standards](#design-system--code-standards)
- [License](#license)

---

## Overview

**Modern Dimenssions** is a full-service digital marketing agency dedicated to helping businesses grow and succeed online. The landing page is engineered to convert visitors into clients by highlighting the agency's capabilities, transparent working process, proven case studies, expert team, client testimonials, and multiple direct contact channels.

---

## Tech Stack

* **HTML5:** 100% semantic, accessible markup (`<header>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`, `<address>`) with ARIA attributes and valid document outline.
* **SCSS (Sass):** Modular stylesheet architecture leveraging SCSS variables, mixins, functions, and nested rules for maintainability.
* **BEM Methodology:** Block-Element-Modifier naming convention preventing style leakage and promoting modular, reusable UI components.
* **Layout Engine:** Combination of **CSS Grid** for complex card grids and **Flexbox** for aligned navigation and component layouts.
* **Responsive & Fluid Typography:** SCSS fluid-typography calculations (`fluid-text`) ensuring smooth font scaling from mobile to wide desktop screens.
* **Adaptive Favicons:** Dynamic SVG favicons that automatically switch between light and dark themes via `prefers-color-scheme`.
* **Accessibility (a11y):** Clear `:focus-visible` styling, screen-reader helper classes (`.visually-hidden`), and semantic form labels.

---

## Key Features & Website Sections

1. **Header & Navigation:**
   * Modern Dimenssions branding logo.
   * Desktop navigation menu with active states.
   * "Request a quote" call-to-action button.
   * Mobile navigation overlay (`<dialog>`) triggered by an animated burger button.

2. **Hero Section:**
   * Engaging headline: *"Navigating the digital landscape for success"*.
   * Clear value proposition and *"Book a consultation"* primary action.
   * Fluid hero graphic and trusted partner showcase (*Amazon, Dribbble, HubSpot, Notion, Netflix, Zoom*).

3. **Services Grid:**
   * Showcase of 6 core service offerings:
     * Search Engine Optimization (SEO)
     * Pay-Per-Click (PPC) Advertising
     * Social Media Marketing
     * Email Marketing
     * Content Creation
     * Analytics and Tracking
   * Themed card styles (light, dark, and accent) with custom vector graphics and interactive links.

4. **Call to Action (CTA) Banner:**
   * Promotional block: *"Let's make things happen"*.
   * Direct conversion prompt to receive a customized digital marketing proposal.

5. **Case Studies (Studies):**
   * Curated client case studies demonstrating measurable growth, traffic boosts, and lead generation.
   * Horizontal slider/grid layout with individual "Learn more" interactive triggers.

6. **Our Working Process:**
   * Step-by-step accordion breakdown of the 6-stage agency workflow:
     1. Consultation
     2. Research and Strategy Development
     3. Implementation
     4. Monitoring and Optimization
     5. Reporting and Communication
     6. Continual Improvement

7. **Team Section:**
   * Highlights agency leadership and specialists with photos, roles, experience briefs, and LinkedIn profile links.

8. **Client Testimonials (Reviews):**
   * High-contrast dark slider displaying real client feedback and verified recommendations.
   * Interactive slider navigation buttons and pagination indicators.

9. **Contact Us Form:**
   * Lead capture form with radio buttons for request type (*"Say Hi"* / *"Get a Quote"*).
   * Fields for Name, Email, **Phone / Alternative Contact**, and Project Message.

10. **Comprehensive Footer:**
    * Dark theme footer with navigation links and social icons (LinkedIn, Facebook, Twitter).
    * **Direct and Alternative Contact Channels**.
    * Newsletter subscription form with responsive validation.
    * Privacy policy link and updated copyright notice.

---

## Brand Identity & Contact Details

**Modern Dimenssions** provides multi-channel communication options including alternative details for streamlined inquiries:

| Contact Channel | Detail | Note |
| :--- | :--- | :--- |
| **Brand Name** | Modern Dimenssions | Official Digital Agency Name |
| **Primary Email** | `info@moderndimenssions.com` | General inquiries & consultations |
| **Alternative Email** | `support@moderndimenssions.com` | Client support & technical assistance |
| **Primary Phone** | `+1 (555) 567-8901` | Direct agency line |
| **Alternative Phone** | `+1 (555) 567-8902` | Alternative / secondary contact line |
| **Headquarters** | 1234 Modern Dimension Way, Suite 500, San Francisco, CA 94107 | Office address |

---

## Project Structure

```text
Modern-Dimenssions/
|-- assets/
|   |-- favicon/
|   |   |-- favicon-dark.svg       # Dark theme adaptive SVG favicon
|   |   `-- favicon-light.svg      # Light theme adaptive SVG favicon
|   |-- fonts/
|   |   |-- SpaceGrotesk-Medium.woff2
|   |   `-- SpaceGrotesk-Regular.woff2
|   `-- images/
|       |-- backgrounds/           # Section illustrations (hero, banner, contact)
|       |-- logo/
|       |   |-- logo.svg           # Header logo with Modern Dimenssions branding
|       |   `-- logo-light.svg     # Footer light logo
|       |-- partners/              # Partner brand SVGs (Amazon, Zoom, etc.)
|       |-- services/              # Service card vector illustrations
|       `-- team/                  # Team member avatars
|-- styles/
|   |-- base/                      # Reset, variables, typography, globals
|   |   |-- _fonts.scss
|   |   |-- _globals.scss
|   |   |-- _index.scss
|   |   |-- _normalize.scss
|   |   |-- _utils.scss
|   |   `-- _variables.scss
|   |-- components/                # Reusable BEM components (buttons, cards, forms)
|   |   |-- _banner.scss
|   |   |-- _button.scss
|   |   |-- _field.scss
|   |   |-- _grid.scss
|   |   |-- _mobile-overlay.scss
|   |   |-- _pagination.scss
|   |   |-- _puddle-bg.scss
|   |   |-- _radio.scss
|   |   |-- _radios.scss
|   |   |-- _review-card.scss
|   |   |-- _section.scss
|   |   |-- _service-card.scss
|   |   |-- _soc1als.scss
|   |   |-- _subscribe-form.scss
|   |   `-- _team-card.scss
|   |-- helpers/                   # Sass mixins, media query helpers, functions
|   |   |-- _index.scss
|   |   |-- _media.scss
|   |   `-- _mixins.scss
|   |-- sections/                  # Dedicated styles for each page section
|   |   |-- _contact-us.scss
|   |   |-- _footer.scss
|   |   |-- _header.scss
|   |   |-- _hero.scss
|   |   |-- _process.scss
|   |   |-- _reviews.scss
|   |   |-- _services.scss
|   |   |-- _studies.scss
|   |   `-- _team.scss
|   |-- main.scss                  # Main SCSS entry point
|   `-- main.min.css               # Production minified stylesheet
|-- dev.js                         # Local dev server with live reload & Sass watcher
|-- index.html                     # Semantic HTML5 entry page
|-- package.json                   # Project metadata and Sass build scripts
`-- README.md                      # Project documentation
```

---

## Getting Started

### 1. Prerequisites

To view the website, you only need any modern web browser. To build or modify SCSS stylesheets, ensure you have:
* [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
* `npm` (included with Node.js)

### 2. Installation

Clone or download the project repository, then open the project directory and install development dependencies:

```bash
npm install
```

### 3. Open in Browser

You can open `index.html` directly in your browser:
* Double-click `index.html`, or
* Use an IDE live server extension (such as VS Code Live Server).

---

## Available Scripts

In the project root, you can execute:

* **Start local development server (with live reload & Sass watcher):**
  ```bash
  npm run dev
  ```
  *Launches a local development server at `http://localhost:3000`, watches SCSS files for changes, recompiles into `styles/main.min.css`, and automatically reloads the browser.*

* **Compile SCSS for production (minified):**
  ```bash
  npm run sass:build
  ```
  *Compiles `styles/main.scss` into compressed, production-ready `styles/main.min.css`.*

* **Watch SCSS only:**
  ```bash
  npm run sass:watch
  ```
  *Watches `styles/main.scss` and recompiles upon every change with source maps.*

---

## Design System & Code Standards

* **Color Palette:**
  * Dark Accent: `#191A23` (Dark slate)
  * Secondary Dark: `#292A32`
  * Light Background: `#FFFFFF`
  * Primary Accent: `#B9FF66` (Vibrant lime green)
  * Neutral Gray: `#F3F3F3`
  * Border & Line Gray: `#898989`
* **Typography:**
  * Font Family: `Space Grotesk`, sans-serif (Regular 400 & Medium 500)
  * Fluid scaling via SCSS mixin (`clamp()` calculations across viewport widths)
* **CSS Conventions:**
  * Strict BEM naming (`.block__element--modifier`)
  * CSS Custom Properties (`--color-accent`, `--border-radius`, etc.) defined in `:root`

---

## License

This project is open-source and available under the [ISC License](LICENSE).
