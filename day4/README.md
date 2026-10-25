# Note Scratchpad (Day 4 Assignment)

A lightweight, responsive note draft and scratchpad application built with vanilla HTML5, CSS3, and modern JavaScript. The app allows users to compose text with live character and word counters, dynamically notifies users when approaching or exceeding character limits, persists drafts and theme preferences across page reloads using `localStorage`, and provides convenient clearing via button click or the `Escape` key.

## Features

- **Live Character Counter**: Displays character count in real time (`N / 200 characters`).
- **Live Word Counter**: Automatically computes and updates word count (`N words`).
- **Dynamic Warning States**:
  - Turns orange (`.warning` class) when text exceeds 180 characters.
  - Turns bold red (`.over` class) when text exceeds the 200-character limit.
- **Draft Auto-Saving**: Automatically saves textarea contents to `localStorage` on every keystroke.
- **Draft & Theme Restoration**: Restores any saved note draft and active theme whenever the page is refreshed.
- **Theme Toggling**: Seamless dark and light mode toggle with state saved in `localStorage`, powered by CSS variables on `:root` and `body.dark`.
- **Keyboard & Button Reset**: Clears the note draft, empties storage, and resets counters when clicking **Clear** or pressing the **Escape** key inside the textarea.

## How to Run Locally

1. Clone or navigate to the repository folder:
   ```bash
   cd /home/clarryson/domcss/webdevelopment/day4
   ```
2. Open `index.html` in your web browser:
   - Using your file manager or browser, open `day4/index.html`.
   - Alternatively, use Python's built-in static server:
     ```bash
     python3 -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.

## What I Learned

1. **CSS Variables & Efficient Theming**: By defining color tokens on `:root` and re-assigning them under `body.dark`, the entire application theme can be switched simply by toggling a single class on the `<body>` element without duplicate CSS rules.
2. **DOM Event Handling & Live Synchronization**: Using the `input` event allows instant synchronization between user typing, counter calculations, threshold styling, and background draft persistence.
3. **Web Storage API (`localStorage`)**: Persisting both text content and theme state enables a seamless user experience that survives page refreshes and browser restarts.
