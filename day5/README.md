# User Directory & Live Search (Day 5 Assignment)

A responsive, asynchronous web application and REST API design document built for the Day 5 Web Foundations assignment.

---

## Deliverables in this Directory

- `index.html`: Web page containing:
  - `<button id="load-users">`: Triggers asynchronous user data retrieval.
  - `<label for="filter-input">` & `<input id="filter-input">`: Client-side search input for instant filtering.
  - `<p id="status">`: Displays loading, success, and error feedback states.
  - `<ul id="users-list">`: Dynamic list populated with user cards.
  - Loads `users.js` with the `defer` attribute.
- `users.js`: JavaScript logic implementing:
  - `loadUsers()` using `fetch`, `async / await`, and `try / catch / finally`.
  - HTTP status validation via `response.ok`.
  - DOM generation using `document.createElement` and `textContent`.
  - Loading, success, and error messages in `#status`.
  - Disabling the button during network requests.
  - In-memory array storage and `renderUsers(list)` renderer.
  - Real-time case-insensitive filtering on the `input` event without additional HTTP requests.
  - "No users match your filter." empty state display.
- `style.css`: Clean, modern design system featuring glassmorphism, responsive CSS Grid, custom loading spinners, and hover transitions.
- `library-api.md`: Comprehensive REST API design for a library books resource containing at least 6 endpoints and detailed explanations of 400 and 404 HTTP errors.

---

## How to Test

1. Open `index.html` directly in any web browser or serve it via:
   ```bash
   python3 -m http.server 8000
   ```
2. Click **Load Users**:
   - The button becomes disabled and shows a spinner with "Loading users...".
   - Upon completion, 10 user cards are rendered showing each user's Name, Email, City, and Company Name.
   - The status updates to: `"Successfully loaded 10 users."`.
   - The button is re-enabled.
3. Test the **Filter**:
   - Type `"Leanne"` or `"clement"` in the filter box.
   - Notice the list filters in real time without making any network requests.
   - Search for a non-existent name like `"xyz"`.
   - The list renders: `"No users match your filter."`.
4. Test the **Error Path**:
   - Change the URL in `users.js` to an invalid endpoint (e.g. `https://jsonplaceholder.typicode.com/invalid-users-test`).
   - Click **Load Users**.
   - The status displays the error message: `Error: HTTP error! status: 404`.
   - The button re-enables in the `finally` block.
