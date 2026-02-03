# Copilot Instructions for get-site

## Project Overview
This is a static e-commerce site with the following structure:
- HTML pages: `index.html`, `cart.html`, `collections.html`, `product.html`
- CSS: All styles in `css/style.css`
- JavaScript: Main logic split across `js/app.js`, `js/main.js`, `js/cart.js`, `js/products.js`

## Architecture & Data Flow
- **Single-page navigation:** Each HTML file represents a major view (home, cart, collections, product details).
- **JavaScript modules:**
  - `main.js` is typically the entry point for page-specific logic.
  - `app.js` may contain shared utilities or initialization code.
  - `cart.js` manages cart state and interactions.
  - `products.js` handles product listing and details.
- **No build system:** All files are loaded directly; there is no bundler or transpiler.
- **No backend:** All data is client-side; any dynamic behavior is handled in JS files.

## Developer Workflows
- **Debugging:** Use browser DevTools. No custom debug scripts or build steps.
- **Testing:** No automated tests detected; manual browser testing is standard.
- **Live reload:** Not configured; refresh browser to see changes.

## Project Conventions
- **File naming:**
  - HTML files are named for their function/view.
  - JS files are named for their domain (cart, products, app, main).
- **CSS:** All styles are centralized in `css/style.css`.
- **No frameworks:** Pure HTML, CSS, and JS; no React, Vue, etc.
- **No external dependencies:** No package manager or third-party libraries detected.

## Integration Points
- **Cross-component communication:**
  - JS files may share global variables or use DOM events for interaction.
  - Cart and product logic are separated but may interact via shared DOM elements or window state.

## Examples
- To update cart logic, edit `js/cart.js` and ensure changes are reflected in `cart.html`.
- To change site-wide styles, update `css/style.css`.
- To add a new product view, create a new HTML file and corresponding JS logic in `js/products.js`.

## Key Files
- `index.html`, `cart.html`, `collections.html`, `product.html`
- `css/style.css`
- `js/app.js`, `js/main.js`, `js/cart.js`, `js/products.js`

---
**If you discover new patterns or workflows, update this file to keep instructions current.**
