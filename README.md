# Portfolio Website Template

A clean, minimalist personal portfolio website built with vanilla HTML5, CSS3, and JavaScript. Free to use as a starting point for your own portfolio!

---

## Overview

A multi-page static portfolio site with a professional dark theme design. Features custom typography via `@font-face`, a typewriter animation, sticky navigation, and a consistent layout across all pages. No frameworks, no dependencies, no build tools — just HTML, CSS, and JavaScript.

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — flexbox, grid, transitions, `@font-face`
- **JavaScript** — vanilla, no dependencies
- **Font** — Cormorant Garamond (self-hosted via TTF)

---

## Project Structure

```
Portfolio_website/
├── index.html               # Landing page (rename from final_home.html)
├── final_education.html     # Education section
├── final_background.html    # Background / experience section
├── final_project.html       # Projects showcase
├── final_aboutme.html       # About Me section
├── final_style.css          # Shared stylesheet
├── final_java.js            # Shared JavaScript
└── Cormorant_Garamond/      # Self-hosted font files (TTF)
```

---

## Features

- Typewriter animation on every page header
- Sticky navigation bar with active page highlighting
- Hover effects on all nav links
- Dynamic copyright year and month (auto-updated via JavaScript)
- Dark theme with cream text and coral accent color
- Two-column footer with email and social links
- White card style for images with drop shadows
- Clean layout using flexbox and CSS grid

---

## How to Use This Template

1. **Download or clone** this repository
2. **Add your font** — download `CormorantGaramond-Regular.ttf` from [Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond) and place it inside a `Cormorant_Garamond/` folder
3. **Edit each HTML file** and replace the placeholder content with your own
4. **Update the footer** on every page with your real email and social links
5. **Add your images** to the project folder and update the `src` attributes
6. **Update `final_java.js`** — change the function name if needed and make sure it matches across all pages
7. Open `index.html` in your browser and you are good to go!

---

## Getting Started Locally

No build tools or dependencies required. Simply open `index.html` in a browser or serve the directory with any static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deploying

This site works with any static hosting provider:

- **Netlify** — drag and drop your project folder onto the Netlify dashboard
- **GitHub Pages** — push to a repo and enable Pages under Settings
- **Any web server** — upload files via FTP and make sure `index.html` is in the root

---

## Design Reference

| Property | Value |
|---|---|
| Background | `#1e1e22` |
| Footer background | `#26262c` |
| Nav background | `#2e2e36` |
| Text | `#f0ece8` |
| Muted text | `#9a9097` |
| Accent (coral) | `#e07068` |
| Accent hover | `#c9524a` |
| Max width | `1200px` |
| Primary font | Cormorant Garamond |
| Body font | Arial, sans-serif |

---

## Credits

- Font: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) by Christian Thalmann — free via Google Fonts
- Footer layout inspired by [HTML5 UP](https://html5up.net/escape-velocity)
- Built by [Sam Vazquez](https://github.com/svazqu24)
