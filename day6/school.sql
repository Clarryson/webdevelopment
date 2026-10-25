-- ============================================================================
-- Day 6 Assignment: School Database Schema & Queries
-- Compatible with SQLite (e.g., sqliteonline.com)
-- ============================================================================

-- Ensure foreign key constraint enforcement is enabled in SQLite
PRAGMA foreign_keys = ON;

-- Clean up any existing tables (in dependency order)
DROP TABLE IF EXISTS enrolments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS students;

-- ============================================================================
-- 1. Table Definitions
-- ============================================================================

-- Students Table
-- Stores individual student identification and contact details
CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

-- Courses Table
-- Stores the academic courses offered by the school
CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL
);

-- Enrolments Table (Junction / Join Table)
-- Resolves the many-to-many relationship between students and courses
-- Stores the specific grade achieved in that enrollment
CREATE TABLE enrolments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    grade TEXT,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    -- Rule preventing the same student from enrolling in the same course twice
    UNIQUE (student_id, course_id)
);

-- ============================================================================
-- 2. Sample Data Insertion
-- At least 3 students, 3 courses, and 5 enrolments
-- ============================================================================

-- Insert Students (4 students: 3 enrolled in courses, 1 unenrolled)
INSERT INTO students (name, email) VALUES
    ('Alice Johnson', 'alice.johnson@example.com'),
    ('Bob Smith', 'bob.smith@example.com'),
    ('Charlie Brown', 'charlie.brown@example.com'),
    ('Diana Prince', 'diana.prince@example.com');

-- Insert Courses (4 courses: 3 with enrollments, 1 without)
INSERT INTO courses (code, title) VALUES
    ('CS101', 'Web Development'),
    ('CS102', 'Database Systems'),
    ('CS103', 'Data Structures & Algorithms'),
    ('CS104', 'Cloud Computing');

-- Insert Enrolments (5 enrolments)
-- Alice enrolled in CS101 and CS102
-- Bob enrolled in CS101 and CS103
-- Charlie enrolled in CS102
INSERT INTO enrolments (student_id, course_id, grade) VALUES
    (1, 1, 'A'),
    (1, 2, 'B+'),
    (2, 1, 'B'),
    (2, 3, 'A-'),
    (3, 2, 'C+');

-- ============================================================================
-- 3. Required Queries
-- ============================================================================

-- Query 1: All courses for one student (by name)
-- Retrieves all courses taken by 'Alice Johnson' using JOIN
SELECT 
    s.name AS student_name,
    c.code AS course_code,
    c.title AS course_title,
    e.grade
FROM students s
JOIN enrolments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
WHERE s.name = 'Alice Johnson';

-- Query 2: All students on one course
-- Retrieves all students enrolled in 'Web Development' using JOIN
SELECT 
    c.code AS course_code,
    c.title AS course_title,
    s.name AS student_name,
    s.email AS student_email,
    e.grade
FROM courses c
JOIN enrolments e ON c.id = e.course_id
JOIN students s ON e.student_id = s.id
WHERE c.title = 'Web Development'
ORDER BY s.name ASC;

-- Query 3: The number of students per course
-- Uses LEFT JOIN and GROUP BY so courses with zero students still appear
SELECT 
    c.code AS course_code,
    c.title AS course_title,
    COUNT(e.student_id) AS student_count
FROM courses c
LEFT JOIN enrolments e ON c.id = e.course_id
GROUP BY c.id, c.code, c.title
ORDER BY student_count DESC, c.code ASC;

-- Query 4: Students who have no enrolments
-- Uses LEFT JOIN to find students whose enrolment record IS NULL
SELECT 
    s.id AS student_id,
    s.name AS student_name,
    s.email AS student_email
FROM students s
LEFT JOIN enrolments e ON s.id = e.student_id
WHERE e.id IS NULL;

-- Query 5: An update of one enrolment's grade
-- Updates Charlie Brown's grade in 'Database Systems' from 'C+' to 'A'
UPDATE enrolments
SET grade = 'A'
WHERE student_id = (SELECT id FROM students WHERE name = 'Charlie Brown')
  AND course_id = (SELECT id FROM courses WHERE code = 'CS102');

-- Verification query to display the updated enrolment record
SELECT 
    s.name AS student_name,
    c.code AS course_code,
    c.title AS course_title,
    e.grade AS updated_grade
FROM enrolments e
JOIN students s ON e.student_id = s.id
JOIN courses c ON e.course_id = c.id
WHERE s.name = 'Charlie Brown' AND c.code = 'CS102';
