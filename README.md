# Portfolio Website
 
A clean, minimalist personal portfolio website built with vanilla HTML5, CSS3, and JavaScript.
 
## Overview
 
This is a multi-page static portfolio site with a professional dark theme design. It features custom typography, smooth animations, and a consistent layout across all sections.
 
## Tech Stack
 
- **HTML5** — semantic markup
- **CSS3** — flexbox, grid, custom properties, transitions
- **JavaScript** — vanilla, no dependencies
- **Font** — Cormorant Garamond (self-hosted)
 
## Project Structure
 
```
Portfolio_website/
├── final_home.html         # Landing page
├── final_education.html    # Education section
├── final_background.html   # Background / experience section
├── final_project.html      # Projects showcase
├── final_aboutme.html      # About Me section
├── final_style.css         # Shared stylesheet
├── final_java.js           # Shared JavaScript
└── Cormorant_Garamond/     # Self-hosted font files
```
 
## Features
 
- Typewriter animation on the homepage header
- Sticky navigation with active page highlighting
- Dynamic copyright year (auto-updated via JS)
- Dark theme with cream text and coral accent color
- Responsive layout using flexbox and CSS grid
 
## Getting Started
 
No build tools or dependencies required. Simply open `final_home.html` in a browser or serve the directory with any static file server:
 
```bash
# Using Python
python3 -m http.server 8000
 
# Using Node.js (npx)
npx serve .
```
 
Then visit `http://localhost:8000/final_home.html`.
 
## Design
 
| Property | Value |
|---|---|
| Background | `#1e1e22` (dark gray) |
| Text | `#f0ece8` (cream) |
| Accent | `#e07068` (coral red) |
| Max width | `1200px` |
| Primary font | Cormorant Garamond |

