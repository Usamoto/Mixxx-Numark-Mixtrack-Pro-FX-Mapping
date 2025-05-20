# 🎨 Style Guide for Nini's Portfolio

This style guide documents the key design conventions, class names, and CSS files used throughout the project.

---

## 🧱 CSS Structure

| File              | Purpose                                |
|-------------------|-----------------------------------------|
| `style.css`       | Global layout and Light Mode styles     |
| `neon-dark.css`   | Acid Dark Mode styles (neon themes)     |
| `matrix.css`      | Matrix intro animation for index page   |

---

## 🎛️ Mode Classes

### `.light-mode`
- Applied to `<body>` for default Light Mode
- Background: `#f9f9f9`
- Font color: `#222`

### `.acid-dark`
- Applied to `<body>` for neon Dark Mode
- Background: `#0a0a0a` with `acid-smiley.png`
- Font color: `#CCFF00`
- Uses neon pink, electric blue, and green highlights

---

## 📦 Reusable Class Names

### `#matrixCanvas`
- Full-screen canvas background for Matrix animation

### `.intro-center`
- Centers the main button on intro page

### `#enterButton`
- Animated call-to-action button for "CLICK ME"

### `.pill-container`
- Container for Red/Blue pill options

### `.pill`
- Base class for pills
    - `.pill.red` → Red pill button
    - `.pill.blue` → Blue pill button

### `.main-image`
- Used for large illustrations (e.g., controller image)
- Applies `border-radius`, `box-shadow`, and centering

---

## 📁 Assets

| File                  | Use Case                      |
|-----------------------|-------------------------------|
| `controller-showcase.png` | Displayed in main section     |
| `acid-smiley.png`         | Background for Acid Dark Mode |

---

## 🧭 Navigation Links
Used across pages:
```html
<ul>
  <li><a href="home.html">Home</a></li>
  <li><a href="projects.html">Projects</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
```

---

## 📌 Tips
- Avoid duplicating CSS per page. Rely on `style.css` and `neon-dark.css`.
- Load both stylesheets in each HTML file. The active theme is controlled via `class="light-mode"` or `class="acid-dark"`.
- JavaScript (`mode-toggle.js`) handles mode switching after Matrix intro.

---

> Updated: May 2025  
> Author: Nini
