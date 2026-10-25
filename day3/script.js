// =============================================================================
// Day 3: JavaScript Fundamentals - Notes Toolkit
// Beginner-friendly functions for working with arrays, objects, and strings.
// =============================================================================

// Starting array of note objects
// Each note is an object with three properties: id (number), text (string), and category (string).
let notes = [
  { id: 1, text: "Buy milk and bread", category: "personal" },
  { id: 2, text: "Finish the Day 3 assignment", category: "study" },
  { id: 3, text: "Email the project report to Grace", category: "work" },
  { id: 4, text: "Revise JavaScript arrays", category: "study" },
  { id: 5, text: "Call mum", category: "personal" },
];

/**
 * 1. searchNotes(word)
 * -----------------------------------------------------------------------------
 * Finds and returns all notes whose text contains the given search word.
 * It ignores whether letters are uppercase or lowercase.
 *
 * How it works:
 * - toLowerCase() converts both the note text and search word to lowercase so
 *   "Bread" matches "bread".
 * - includes() checks if the search word exists anywhere inside the text.
 * - filter() creates a new array containing only the notes that match.
 */
function searchNotes(word) {
  const searchLower = word.toLowerCase();

  return notes.filter(function (note) {
    const noteTextLower = note.text.toLowerCase();
    return noteTextLower.includes(searchLower);
  });
}

/**
 * 2. longestNote()
 * -----------------------------------------------------------------------------
 * Finds and returns the single note object that has the most characters.
 * Returns null if the notes array is completely empty.
 *
 * How it works:
 * - First, check if the array has 0 notes. If so, return null immediately.
 * - Assume the first note (index 0) is the longest to start.
 * - Loop through the rest of the notes. If we find one with a longer text length,
 *   we update our 'longest' variable to hold that note.
 */
function longestNote() {
  // Edge case: if there are no notes at all, return null
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
 * 3. countByCategory()
 * -----------------------------------------------------------------------------
 * Counts how many notes belong to each category (personal, work, study).
 * Returns an object like: { personal: 2, study: 2, work: 1 }
 *
 * How it works:
 * - We start with an empty object: const counts = {};
 * - We loop over every note in the array.
 * - If we haven't seen this category yet, set it to 1.
 * - If we have already seen it, add 1 to the existing count.
 */
function countByCategory() {
  const counts = {};

  for (let i = 0; i < notes.length; i++) {
    const category = notes[i].category;

    if (counts[category]) {
      counts[category] = counts[category] + 1; // Category already exists, increase by 1
    } else {
      counts[category] = 1;                   // First time seeing this category
    }
  }

  return counts;
}

/**
 * 4. getSummary()
 * -----------------------------------------------------------------------------
 * Returns a friendly English sentence summarizing total notes and category counts.
 * Example output: "5 notes: 2 personal, 2 study, 1 work."
 * Special case: If total is 1, uses the singular "note" instead of "notes".
 *
 * How it works:
 * - Checks if total is 1 to decide between "note" or "notes".
 * - Calls countByCategory() to get the breakdown.
 * - Loops through the categories and joins them with commas.
 */
function getSummary() {
  const totalNotes = notes.length;

  // Use singular "note" if total is 1, otherwise plural "notes"
  const noteWord = totalNotes === 1 ? "note" : "notes";

  const counts = countByCategory();
  const categoryParts = [];

  // Loop through each category key in our counts object
  for (const category in counts) {
    const count = counts[category];
    categoryParts.push(`${count} ${category}`);
  }

  const categoryDetails = categoryParts.join(", ");

  if (categoryDetails.length > 0) {
    return `${totalNotes} ${noteWord}: ${categoryDetails}.`;
  } else {
    return `${totalNotes} ${noteWord}.`;
  }
}

/**
 * 5. isDuplicate(text)
 * -----------------------------------------------------------------------------
 * Checks if a note with the exact same text already exists in the system.
 * It ignores extra spaces at the beginning/end (trim) and ignores capital letters.
 * Returns true if a duplicate exists, or false if the text is unique.
 *
 * How it works:
 * - trim() cuts off accidental extra spaces like "   hello   " -> "hello".
 * - some() checks if AT LEAST ONE note in the array matches the condition.
 */
function isDuplicate(text) {
  const cleanInput = text.trim().toLowerCase();

  return notes.some(function (note) {
    const cleanNoteText = note.text.trim().toLowerCase();
    return cleanNoteText === cleanInput;
  });
}

/**
 * 6. addNote(text, category)
 * -----------------------------------------------------------------------------
 * Adds a new note to the array, but only if all validation rules pass:
 * 1. Text must be between 1 and 200 characters long.
 * 2. Category must be one of: "personal", "work", or "study".
 * 3. Text must NOT be a duplicate of an existing note.
 *
 * Returns true if added successfully, or false if validation failed (and logs why).
 */
function addNote(text, category) {
  // Validation Rule 1: Text length check (1 to 200 characters)
  if (typeof text !== "string" || text.trim().length < 1 || text.length > 200) {
    console.log("Failed to add note: Note text must be between 1 and 200 characters.");
    return false;
  }

  // Validation Rule 2: Allowed category check
  const allowedCategories = ["personal", "work", "study"];
  if (!allowedCategories.includes(category)) {
    console.log("Failed to add note: Category must be one of: personal, work, study.");
    return false;
  }

  // Validation Rule 3: Duplicate check
  if (isDuplicate(text)) {
    console.log(`Failed to add note: A note with the text "${text}" already exists.`);
    return false;
  }

  // Generate a unique ID (find the highest existing ID and add 1)
  let highestId = 0;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id > highestId) {
      highestId = notes[i].id;
    }
  }
  const newId = highestId + 1;

  // Create the new note object and push it into our notes array
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
// These tests check normal cases and edge cases (empty arrays, duplicates, limits).
// =============================================================================

// --- 1. Testing searchNotes(word) ---
console.log(searchNotes("bread")); // Finds "Buy milk and bread"
console.log(searchNotes("nonexistent")); // Returns empty array []
console.log(searchNotes("EMAIL")); // Matches "Email the project..." ignoring case

// --- 2. Testing longestNote() ---
console.log(longestNote()); // Returns the email note (33 characters)
const savedNotesForLongest = notes;
notes = [];
console.log(longestNote()); // Returns null when no notes exist
notes = savedNotesForLongest;

// --- 3. Testing countByCategory() ---
console.log(countByCategory()); // { personal: 2, study: 2, work: 1 }
const savedNotesForCount = notes;
notes = [];
console.log(countByCategory()); // Returns {} when empty
notes = savedNotesForCount;

// --- 4. Testing getSummary() ---
console.log(getSummary()); // "5 notes: 2 personal, 2 study, 1 work."
const savedNotesForSummary = notes;
notes = [{ id: 1, text: "Only one note", category: "personal" }];
console.log(getSummary()); // "1 note: 1 personal." (singular "note")
notes = savedNotesForSummary;

// --- 5. Testing isDuplicate(text) ---
console.log(isDuplicate("Call mum")); // true
console.log(isDuplicate("   CALL MUM   ")); // true (ignores case & extra spaces)
console.log(isDuplicate("Go for a run")); // false (not a duplicate)

// --- 6. Testing addNote(text, category) ---
console.log(addNote("Read chapter 4 of JavaScript guide", "study")); // true (valid note added)
console.log(addNote("Call mum", "personal")); // false (duplicate rejected)
console.log(addNote("Buy groceries", "shopping")); // false (invalid category rejected)
console.log(addNote("", "work")); // false (empty text rejected)
console.log(addNote("x".repeat(201), "work")); // false (over 200 chars rejected)
