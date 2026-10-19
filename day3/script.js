// Starting notes data
let notes = [
  { id: 1, text: "Buy milk and bread", category: "personal" },
  { id: 2, text: "Finish the Day 3 assignment", category: "study" },
  { id: 3, text: "Email the project report to Grace", category: "work" },
  { id: 4, text: "Revise JavaScript arrays", category: "study" },
  { id: 5, text: "Call mum", category: "personal" },
];

/**
 * Returns an array of notes whose text contains word, ignoring upper and lower case.
 * Uses filter, toLowerCase, and includes.
 */
function searchNotes(word) {
  return notes.filter(note =>
    note.text.toLowerCase().includes(word.toLowerCase())
  );
}

/**
 * Returns the note object with the most characters, or null if there are no notes.
 * Handles the empty array first, then compares lengths.
 */
function longestNote() {
  if (notes.length === 0) {
    return null;
  }

  let longest = notes[0];
  for (let i = 1; i < notes.length; i++) {
    if (notes[i].text.length > longest.text.length) {
      longest = notes[i];
    }
  }
  return longest;
}

/**
 * Returns an object counting notes per category.
 * Loops over the notes and increases a counter in an object.
 */
function countByCategory() {
  const counts = {};
  for (const note of notes) {
    if (counts[note.category]) {
      counts[note.category]++;
    } else {
      counts[note.category] = 1;
    }
  }
  return counts;
}

/**
 * Returns a sentence summarizing the notes count and categories.
 * Uses countByCategory and a template literal.
 * Uses "note" for exactly one note and "notes" otherwise.
 */
function getSummary() {
  const totalNotes = notes.length;
  const noteWord = totalNotes === 1 ? "note" : "notes";
  const counts = countByCategory();
  const categoryDetails = Object.entries(counts)
    .map(([category, count]) => `${count} ${category}`)
    .join(", ");

  return categoryDetails
    ? `${totalNotes} ${noteWord}: ${categoryDetails}.`
    : `${totalNotes} ${noteWord}.`;
}

/**
 * Returns true if a note with the same text already exists (ignoring case and extra spaces).
 * Uses some, comparing trimmed lower-case text.
 */
function isDuplicate(text) {
  const cleanText = text.trim().toLowerCase();
  return notes.some(note => note.text.trim().toLowerCase() === cleanText);
}

/**
 * Adds a note only if it is 1–200 characters, is not a duplicate,
 * and the category is one of personal, work, or study.
 * Returns true when added and false otherwise, logging the reason.
 */
function addNote(text, category) {
  // Check length (1–200 characters)
  if (typeof text !== "string" || text.trim().length < 1 || text.length > 200) {
    console.log("Failed to add note: Note text must be between 1 and 200 characters.");
    return false;
  }

  // Check category (must be personal, work, or study)
  const validCategories = ["personal", "work", "study"];
  if (!validCategories.includes(category)) {
    console.log(`Failed to add note: Category must be one of: ${validCategories.join(", ")}.`);
    return false;
  }

  // Check duplicate
  if (isDuplicate(text)) {
    console.log(`Failed to add note: A note with the text "${text}" already exists.`);
    return false;
  }

  // Add the new note
  const newId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1;
  const newNote = {
    id: newId,
    text: text,
    category: category,
  };
  notes.push(newNote);
  return true;
}

// =============================================================================
// Tests and Console Verifications
// =============================================================================

// --- 1. Testing searchNotes(word) ---
console.log(searchNotes("bread")); // Expected: [ { id: 1, text: "Buy milk and bread", category: "personal" } ]
console.log(searchNotes("nonexistent")); // Expected: [] (edge case: no matches found)
console.log(searchNotes("EMAIL")); // Expected: [ { id: 3, text: "Email the project report to Grace", category: "work" } ] (case-insensitive)

// --- 2. Testing longestNote() ---
console.log(longestNote()); // Expected: { id: 3, text: "Email the project report to Grace", category: "work" }
const savedNotesForLongest = notes;
notes = [];
console.log(longestNote()); // Expected: null (edge case: empty notes array)
notes = savedNotesForLongest;

// --- 3. Testing countByCategory() ---
console.log(countByCategory()); // Expected: { personal: 2, study: 2, work: 1 }
const savedNotesForCount = notes;
notes = [];
console.log(countByCategory()); // Expected: {} (edge case: empty notes array)
notes = savedNotesForCount;

// --- 4. Testing getSummary() ---
console.log(getSummary()); // Expected: "5 notes: 2 personal, 2 study, 1 work."
const savedNotesForSummary = notes;
notes = [{ id: 1, text: "Only one note", category: "personal" }];
console.log(getSummary()); // Expected: "1 note: 1 personal." (edge case: singular "note")
notes = savedNotesForSummary;

// --- 5. Testing isDuplicate(text) ---
console.log(isDuplicate("Call mum")); // Expected: true
console.log(isDuplicate("   CALL MUM   ")); // Expected: true (edge case: ignores case and extra spaces)
console.log(isDuplicate("Go for a run")); // Expected: false (edge case: not a duplicate)

// --- 6. Testing addNote(text, category) ---
console.log(addNote("Read chapter 4 of JavaScript guide", "study")); // Expected: true (normal case: note successfully added)
console.log(addNote("Call mum", "personal")); // Expected: false (edge case: duplicate note rejected)
console.log(addNote("Buy groceries", "shopping")); // Expected: false (edge case: invalid category rejected)
console.log(addNote("", "work")); // Expected: false (edge case: empty text rejected)
console.log(addNote("x".repeat(201), "work")); // Expected: false (edge case: text over 200 characters rejected)
