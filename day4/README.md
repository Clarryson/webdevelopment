# Day 4: Interactive Web Apps — DOM Manipulation & LocalStorage

Welcome to **Day 4** of our Web Development journey! Today, we combine HTML, CSS, and JavaScript to build our first **fully interactive web application**: a live note scratchpad with real-time character counters, automatic draft saving, and a dark/light mode toggle.

---

## 1. What is the DOM? (The Puppet Strings Analogy)

When a browser loads an HTML file, it translates all those tags into an internal, live tree of objects called the **DOM (Document Object Model)**.

> **The Marionette / Puppet Analogy:**  
> - **HTML** creates the wooden puppet and paints its face.  
> - **The DOM** is the set of invisible strings attached to the puppet's arms, legs, and mouth.  
> - **JavaScript** is the puppeteer who pulls those strings to make the puppet dance, change colors, or speak!

With the DOM, JavaScript can:
- Read what the user is typing into a text box.
- Change text on the screen instantly without reloading the page.
- Add or remove CSS classes to change colors dynamically.
- Listen for mouse clicks and keyboard presses.

---

## 2. Key Concepts Learned in Day 4

### 2.1 Finding Elements (`document.querySelector`)
To control something on the page, JavaScript first has to "find" it:
```javascript
const noteText = document.querySelector("#note-text");
```
`#note-text` tells JavaScript: *"Find the HTML element whose `id` is `note-text`."* Once found, we store it in a variable so we can read its value or change it later.

---

### 2.2 Event Listeners (The Doorbell Analogy)
An **Event Listener** tells the browser to wait for a specific user action and then run a function when that action occurs:

```javascript
clearBtn.addEventListener("click", clearAll);
```

> **The Doorbell Analogy:**  
> A doorbell sits quietly on the wall doing nothing until someone presses it. When pressed, it immediately rings the chime.  
> Here, `clearBtn` listens for the `"click"` event. When the user clicks the button, it instantly rings our `clearAll()` function!

In our app, we listen for 3 kinds of events:
1. `"input"`: Fires on the textarea every single time a user types, deletes, or pastes a letter.
2. `"click"`: Fires when a button is clicked.
3. `"keydown"`: Fires when a keyboard key is pressed down (used to detect the `Escape` key).

---

### 2.3 `localStorage` (The Pocket Notebook Analogy)
Normally, when you refresh a browser page, everything typed into a form disappears. **`localStorage`** gives our web app a small, private pocket notebook saved inside the user's browser:
- `localStorage.setItem("note-draft", text)`: Writes the note into the notebook.
- `localStorage.getItem("note-draft")`: Reads the saved note back out of the notebook.
- `localStorage.removeItem("note-draft")`: Erases the note from the notebook.

Even if the user closes their browser or restarts their computer, the draft is still waiting for them when they return!

---

### 2.4 CSS Variables & Dark Mode (The Master Light Switch)
In `style.css`, we defined color tokens on `:root`:
```css
:root {
  --bg-color: #f8fafc;
  --text-color: #0f172a;
}
```
When the user switches to Dark Mode, JavaScript adds the `.dark` class to the `<body>` element. Our CSS simply reassigns the variables:
```css
body.dark {
  --bg-color: #0f172a;
  --text-color: #f8fafc;
}
```
Because all cards, buttons, and backgrounds reference these variables, the **entire website flips from bright day to sleek night mode with just one class toggle**!

---

## 3. Step-by-Step Code Walkthrough

### 3.1 Live Character & Word Counters (`updateCounts`)
1. Reads `noteText.value` to get whatever letters are typed in the textarea.
2. Checks `.length` to see how many characters exist.
3. Displays `${charLength} / 200 characters`.
4. **Dynamic Color Alerts:**
   - If characters $\le 180$: Clean, subtle gray color.
   - If characters $> 180$: Adds `.warning` class &rarr; counter turns bright orange to warn the user they are running out of room.
   - If characters $> 200$: Adds `.over` class &rarr; counter turns bold red to alert the user that the limit has been exceeded.
5. Calculates words by splitting text on spaces (`.split(/\s+/)`) and displaying `${words} words`.

---

### 3.2 Auto-Saving Drafts (`saveDraft`)
Whenever the user types a letter, the `input` event triggers `saveDraft()`. It immediately writes the updated text to `localStorage`. The user never has to worry about clicking a "Save" button!

---

### 3.3 Instant Reset (`clearAll`)
Triggered either by clicking the **Clear** button or pressing the **Escape** key while typing:
1. Sets `noteText.value = ""` (empties the text box).
2. Calls `localStorage.removeItem()` (erases the draft from storage).
3. Calls `updateCounts()` (resets the counter back to `0 / 200 characters`).

---

### 3.4 Restoring State on Page Load
When the webpage first boots up:
1. `restoreTheme()`: Checks if the user was using Dark Mode last time. If so, it re-applies Dark Mode.
2. `restoreDraft()`: Checks if there is a saved note draft in `localStorage`. If found, it fills the textarea.
3. `updateCounts()`: Recalculates character and word counts to match the restored text.

---

## 4. How to Run & Try the App

1. Open `day4/index.html` in your web browser.
2. Type a note into the scratchpad. Notice the character counter and word counter update with every keystroke.
3. Type more than 180 characters: watch the counter turn orange!
4. Type more than 200 characters: watch the counter turn red!
5. Refresh the page: notice your note is still there!
6. Click the **Dark Mode** button in the top right to toggle dark mode. Refresh again: notice your theme choice was remembered!
7. Press the `Escape` key inside the text box: watch the scratchpad clear instantly.
