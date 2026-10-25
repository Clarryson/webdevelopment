// Select all required DOM elements
const noteText = document.querySelector("#note-text");
const charCount = document.querySelector("#char-count");
const wordCount = document.querySelector("#word-count");
const clearBtn = document.querySelector("#clear-btn");
const themeToggle = document.querySelector("#theme-toggle");

// Storage keys
const STORAGE_KEY_DRAFT = "note-draft";
const STORAGE_KEY_THEME = "theme";

/**
 * Updates character count, word count, and counter warning/over classes.
 * - Formats: "N / 200 characters" and "N words"
 * - Adds .warning class when over 180 characters
 * - Adds .over class when over 200 characters
 */
function updateCounts() {
  const text = noteText.value;
  const charLength = text.length;

  // Update character counter display
  charCount.textContent = `${charLength} / 200 characters`;

  // Update warning / over classes based on character length
  if (charLength > 200) {
    charCount.classList.add("over");
    charCount.classList.remove("warning");
  } else if (charLength > 180) {
    charCount.classList.add("warning");
    charCount.classList.remove("over");
  } else {
    charCount.classList.remove("warning");
    charCount.classList.remove("over");
  }

  // Update word counter display
  const trimmedText = text.trim();
  const words = trimmedText.length === 0 ? 0 : trimmedText.split(/\s+/).length;
  wordCount.textContent = `${words} words`;
}

/**
 * Saves the current draft to localStorage.
 */
function saveDraft() {
  localStorage.setItem(STORAGE_KEY_DRAFT, noteText.value);
  // Also save to generic 'draft' key for broader compatibility
  localStorage.setItem("draft", noteText.value);
}

/**
 * Clears the textarea, resets counters, and removes the draft from localStorage.
 */
function clearAll() {
  noteText.value = "";
  localStorage.removeItem(STORAGE_KEY_DRAFT);
  localStorage.removeItem("draft");
  updateCounts();
}

/**
 * Toggles dark mode on body, updates button label, and persists choice in localStorage.
 */
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  localStorage.setItem(STORAGE_KEY_THEME, isDark ? "dark" : "light");
}

/**
 * Restores theme from localStorage.
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
 * Restores draft from localStorage.
 */
function restoreDraft() {
  const savedDraft = localStorage.getItem(STORAGE_KEY_DRAFT) ?? localStorage.getItem("draft");
  if (savedDraft !== null) {
    noteText.value = savedDraft;
  }
}

// Event Listeners

// On every input event: update counts and save draft
noteText.addEventListener("input", () => {
  updateCounts();
  saveDraft();
});

// Clear button: empties textarea, resets counters, removes draft
clearBtn.addEventListener("click", clearAll);

// Escape key inside textarea: clears everything
noteText.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    clearAll();
  }
});

// Theme toggle button: toggle dark mode & persist
themeToggle.addEventListener("click", toggleTheme);

// Initialization: restore theme and draft, then update counters
restoreTheme();
restoreDraft();
updateCounts();
