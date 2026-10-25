// =============================================================================
// Day 4: DOM Manipulation, Live Counters & Local Storage
// Beginner-friendly interactive note scratchpad
// =============================================================================

// 1. Grab HTML elements from the page using document.querySelector
// Think of this like finding elements by their #id so JavaScript can talk to them.
const noteText = document.querySelector("#note-text");
const charCount = document.querySelector("#char-count");
const wordCount = document.querySelector("#word-count");
const clearBtn = document.querySelector("#clear-btn");
const themeToggle = document.querySelector("#theme-toggle");

// Keys used to save and retrieve items from the browser's localStorage notebook
const STORAGE_KEY_DRAFT = "note-draft";
const STORAGE_KEY_THEME = "theme";

/**
 * 2. updateCounts()
 * -----------------------------------------------------------------------------
 * Counts how many characters and words are currently typed into the textarea.
 * - Formats character display as: "X / 200 characters"
 * - Formats word display as: "X words"
 * - Adds warning colors when getting close to or exceeding the 200 limit:
 *     - Over 180 characters: turns orange (.warning)
 *     - Over 200 characters: turns bold red (.over)
 */
function updateCounts() {
  const text = noteText.value;
  const charLength = text.length;

  // Update the character count text on the screen
  charCount.textContent = `${charLength} / 200 characters`;

  // Change visual warning states using CSS classes
  if (charLength > 200) {
    charCount.classList.add("over");
    charCount.classList.remove("warning");
  } else if (charLength > 180) {
    charCount.classList.add("warning");
    charCount.classList.remove("over");
  } else {
    // Normal length: remove any warning or over colors
    charCount.classList.remove("warning");
    charCount.classList.remove("over");
  }

  // Calculate word count
  const trimmed = text.trim();
  let words = 0;

  if (trimmed.length > 0) {
    // Split text whenever one or more spaces exist, and count the pieces
    const wordArray = trimmed.split(/\s+/);
    words = wordArray.length;
  }

  wordCount.textContent = `${words} words`;
}

/**
 * 3. saveDraft()
 * -----------------------------------------------------------------------------
 * Saves whatever text is typed inside the textarea into the browser's localStorage.
 * This ensures the user's draft is not lost if they accidentally refresh or close the tab.
 */
function saveDraft() {
  localStorage.setItem(STORAGE_KEY_DRAFT, noteText.value);
  localStorage.setItem("draft", noteText.value); // Backup key for compatibility
}

/**
 * 4. clearAll()
 * -----------------------------------------------------------------------------
 * Empties the textarea, resets the counters back to 0, and deletes the draft
 * from the browser's localStorage memory.
 */
function clearAll() {
  noteText.value = "";
  localStorage.removeItem(STORAGE_KEY_DRAFT);
  localStorage.removeItem("draft");
  updateCounts();
}

/**
 * 5. toggleTheme()
 * -----------------------------------------------------------------------------
 * Switches between Light Mode and Dark Mode.
 * - Adds or removes the .dark class on the <body> tag.
 * - Updates the button text ("Light mode" vs "Dark mode").
 * - Saves the choice into localStorage so the browser remembers it on reload.
 */
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    themeToggle.textContent = "Light mode";
    localStorage.setItem(STORAGE_KEY_THEME, "dark");
  } else {
    themeToggle.textContent = "Dark mode";
    localStorage.setItem(STORAGE_KEY_THEME, "light");
  }
}

/**
 * 6. restoreTheme()
 * -----------------------------------------------------------------------------
 * Checks localStorage when the page first opens to see if the user previously
 * chose Dark Mode. If yes, it restores the dark theme automatically.
 */
function restoreTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "Light mode";
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "Dark mode";
  }
}

/**
 * 7. restoreDraft()
 * -----------------------------------------------------------------------------
 * Checks localStorage when the page first opens to see if there is an unsaved
 * note draft. If found, it populates the textarea with the saved draft text.
 */
function restoreDraft() {
  const savedDraft = localStorage.getItem(STORAGE_KEY_DRAFT) || localStorage.getItem("draft");

  if (savedDraft !== null && savedDraft !== undefined) {
    noteText.value = savedDraft;
  }
}

// =============================================================================
// Event Listeners (Connecting user actions to functions)
// =============================================================================

// When user types inside the textarea: update counters and auto-save the draft
noteText.addEventListener("input", function () {
  updateCounts();
  saveDraft();
});

// When user clicks the "Clear" button: clear everything
clearBtn.addEventListener("click", clearAll);

// When user presses a key inside the textarea: if it's the Escape key, clear everything
noteText.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    clearAll();
  }
});

// When user clicks the Theme Toggle button: switch between light & dark mode
themeToggle.addEventListener("click", toggleTheme);

// =============================================================================
// Startup Initialization
// Run these functions as soon as the script loads so the saved draft and theme appear!
// =============================================================================
restoreTheme();
restoreDraft();
updateCounts();
