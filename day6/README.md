# Day 6: Relational Databases, SQL & Database Design

Welcome to **Day 6** of **my web development journey**! Today, I leave the front-end browser behind and dive into the back-end heart of software engineering: **Databases**, **SQL (Structured Query Language)**, and **Relational Database Design**.

---

## 1. What is a Database? (The Super-Powered Spreadsheet Analogy)

Almost every app you use (Instagram, Netflix, Spotify, Amazon) needs to remember data forever.

> **The Excel Spreadsheet Analogy:**  
> Think of a relational database as a collection of super-powered, interconnected Excel spreadsheets (called **Tables**):
> - Each table has **Columns** (attributes like `name`, `email`, `course_code`).
> - Each table has **Rows** (individual records, like one specific student or one specific course).
> 
> Unlike a simple Excel file on a desktop, a relational database:
> - Can hold billions of rows without slowing down.
> - Enforces strict rules (like never allowing two students to share the same email).
> - Allows thousands of people to read and write at the exact same split-second without corrupting the file.

---

## 2. What is SQL? (The Language of Data)

**SQL (Structured Query Language)** is the international standard language used to talk to relational databases (like PostgreSQL, MySQL, SQLite, and Microsoft SQL Server).

With SQL, simple English-like commands are written to:
- **`CREATE TABLE`**: Set up a new spreadsheet.
- **`INSERT INTO`**: Add new rows.
- **`SELECT ... FROM`**: Search and read rows.
- **`UPDATE ... SET`**: Change existing data.
- **`DELETE FROM`**: Remove data.

---

## 3. Key Relational Concepts Made Simple

### 3.1 Primary Keys (The Student ID Card)
Every row in a table must have a unique identifier called a **Primary Key** (`id`).
- Just like every citizen has a unique Social Security Number or National ID, no two students can ever have the same `id`.
- In SQLite, `id INTEGER PRIMARY KEY AUTOINCREMENT` is used, meaning the database automatically assigns numbers `1, 2, 3, 4...`.

### 3.2 Foreign Keys (The Reference Badge)
A **Foreign Key** is a column in one table that points directly to the Primary Key of another table.
- In the `enrolments` table, `student_id` is a foreign key pointing to `students(id)`.
- It guarantees referential integrity: a student who does not exist in the students table cannot be enrolled!

### 3.3 The 3 Types of Relationships
1. **One-to-One (1:1):** One person has one passport; one passport belongs to one person.
2. **One-to-Many (1:N):** One mother can have multiple children; each child has only one biological mother.
3. **Many-to-Many (M:N):** One student takes many courses, and each course is attended by many students.

---

## 4. Why Do We Need a Join Table (`enrolments`)?

When two entities have a **Many-to-Many relationship** (Students and Courses), how is the enrollment data stored?

### The Bad Idea: Comma-Separated Lists
Imagine putting this inside the `students` table:
| id | name | courses |
| :--- | :--- | :--- |
| 1 | Alice | CS101, MATH201, BIO100 |

Why is this terrible?
- It cannot be indexed.
- Searching for all students taking "CS101" forces the database to read every single letter of every single student.
- What if Alice gets an 'A' in CS101 and a 'C' in MATH201? Where are her individual grades stored?

### The Professional Solution: The Join (Junction) Table
I create a third table called `enrolments` that links one student to one course, and holds attributes specific to that enrollment event (like their `grade`!):

```
+---------------+              +--------------------+              +---------------+
|   STUDENTS    |              |     ENROLMENTS     |              |    COURSES    |
+---------------+              +--------------------+              +---------------+
| id            |<-----(1:N)---| student_id         |              | id            |
| name          |              | course_id          |---(N:1)----->| code          |
| email         |              | grade ('A', 'B+')  |              | title         |
+---------------+              +--------------------+              +---------------+
```

The composite rule `UNIQUE (student_id, course_id)` ensures that a student cannot accidentally enroll in the same course twice!

---

## 5. SQL Queries Explained Step-by-Step

All my queries live inside [`school.sql`](./school.sql). Here is how they work:

### Query 1: Find all courses for one student by name
```sql
SELECT c.code, c.title, e.grade
FROM students s
JOIN enrolments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
WHERE s.name = 'Alice Johnson';
```
- **How it works:** Starts at Alice Johnson in the `students` table, hops across the `enrolments` bridge to find her course IDs, and grabs the course names and her grades from the `courses` table.

---

### Query 2: Find all students on one course
```sql
SELECT s.name, s.email, e.grade
FROM courses c
JOIN enrolments e ON c.id = e.course_id
JOIN students s ON e.student_id = s.id
WHERE c.code = 'CS101';
```
- **How it works:** Looks up the course `'CS101'` and prints out the class roster (names, emails, and current grades of everyone enrolled).

---

### Query 3: Count total enrolled students per course
```sql
SELECT c.code, c.title, COUNT(e.id) AS total_enrolled
FROM courses c
LEFT JOIN enrolments e ON c.id = e.course_id
GROUP BY c.id;
```
- **Why `LEFT JOIN`?** If a course has **0 students enrolled**, a standard `INNER JOIN` would erase that course from the report! A `LEFT JOIN` keeps all courses on the list and displays `0` for empty courses.
- **`COUNT` & `GROUP BY`:** Tallies the enrollment rows for each individual course.

---

### Query 4: Find students with NO enrollments
```sql
SELECT s.id, s.name, s.email
FROM students s
LEFT JOIN enrolments e ON s.id = e.student_id
WHERE e.id IS NULL;
```
- **How it works:** Pairs every student with their enrollments. If a student has never enrolled in any course, the right side (`e.id`) is empty (`NULL`). Filtering for `WHERE e.id IS NULL` gives the exact list of unenrolled students!

---

### Query 5: Update a grade and verify
```sql
UPDATE enrolments
SET grade = 'A+'
WHERE student_id = (SELECT id FROM students WHERE name = 'Bob Smith')
  AND course_id  = (SELECT id FROM courses WHERE code = 'CS101');
```
- **How it works:** Safely updates Bob Smith's grade from an `'A'` to an `'A+'` using subqueries to look up his student ID and the CS101 course ID.

---

## 6. What is Database Indexing? (The Book Index Analogy)

If you have a 1,000-page biology textbook and want to learn about "Mitochondria":
- **Without an index:** You must read all 1,000 pages from front to back until you find the word (a slow $O(N)$ full table scan).
- **With an index:** You flip to the back of the book, look up "M", find "Mitochondria... page 412", and jump directly there in 2 seconds ($O(\log N)$ lookup)!

In relational databases, adding an index on foreign keys (like `idx_enrolments_student_id`) creates that fast alphabetical lookup tree, keeping queries instant even with millions of records.

---

## 7. How to Run & Verify the SQL Code

### Option 1: Run with Python (Instant & Local)
Run this one-liner in the terminal to test the SQL script in memory:
```bash
python3 -c "
import sqlite3
with open('/home/clarryson/domcss/webdevelopment/day6/school.sql') as f:
    sql = f.read()
con = sqlite3.connect(':memory:')
con.executescript(sql)
print('✅ All SQL executed cleanly with zero errors!')
"
```

### Option 2: Run in an Online Playground
1. Open [sqliteonline.com](https://sqliteonline.com).
2. Copy the entire contents of [`school.sql`](./school.sql).
3. Paste into the editor and click **Run**.
4. All tables, rows, and query outputs will display right on the screen!
