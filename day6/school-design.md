# School Database Architecture & Design

A technical design document outlining the entity structure, relational mechanics, performance indexing, and architectural database selection for the school management system.

---

## 1. Table Explanations

- **`students`**:
  Represents individual students enrolled in the school.
  - `id`: Auto-incrementing integer serving as the surrogate primary key.
  - `name`: Full name of the student (`TEXT`, mandatory).
  - `email`: Institutional email address (`TEXT`, mandatory, unique constraint) used for identification, login, and communication.

- **`courses`**:
  Represents academic courses and subject modules offered by the institution.
  - `id`: Auto-incrementing integer serving as the surrogate primary key.
  - `code`: Standardized department course identifier (e.g., `'CS101'`, `TEXT`, mandatory, unique constraint).
  - `title`: Descriptive title of the course (e.g., `'Web Development'`, `TEXT`, mandatory).

- **`enrolments`**:
  The junction (associative) table that links students to the courses they attend.
  - `id`: Auto-incrementing integer primary key for unambiguous record addressing.
  - `student_id`: Foreign key referencing `students(id)` with cascading deletion.
  - `course_id`: Foreign key referencing `courses(id)` with cascading deletion.
  - `grade`: The performance evaluation or letter grade achieved (e.g., `'A'`, `'B+'`).
  - `UNIQUE (student_id, course_id)`: Composite unique constraint preventing duplicate enrollments for the same student on the same course.

---

## 2. Entity Relationships & Join Table Rationale

### Relationships
- **One-to-Many (`1:N`)**:
  - `students` &rarr; `enrolments`: A single student may have zero, one, or multiple course enrolments.
  - `courses` &rarr; `enrolments`: A single course offering can have zero, one, or multiple enrolled students.
- **Many-to-Many (`M:N`)**:
  - `students` &harr; `courses`: Students can take many courses, and each course is taken by many students.

### Why a Join Table is Needed
Relational database theory and First Normal Form (1NF) require atomic attributes in every column. Without a join table, one would either have to:
1. Store non-atomic delimited lists (e.g., comma-separated course IDs inside a student row), which prevents indexing, destroys referential integrity, and makes joins computationally prohibitive; or
2. Duplicate student or course rows for every enrollment, causing severe data redundancy and update anomalies.

The `enrolments` junction table decomposes the complex many-to-many relationship into two clean one-to-many relationships. Furthermore, it provides the essential data structure to store **relationship-specific attributes** (the `grade`, date of enrollment, or completion status) that describe the enrollment event itself rather than belonging solely to the student or the course.

---

## 3. Recommended Index & Rationale

### Recommended Index
```sql
CREATE INDEX idx_enrolments_student_id ON enrolments(student_id);
```

### Rationale
In relational database engines like SQLite and PostgreSQL, primary keys are indexed automatically with B-trees, but **foreign key columns in child tables are not indexed by default**. 

In an academic database, queries frequently join `enrolments` with `students` (e.g., fetching all courses taken by a student, calculating transcripts, or performing cascade checks upon deletion). Without an index on `enrolments(student_id)`, the database engine must execute a full table scan (`O(N)`) over all enrollment records whenever filtering or joining by student. Adding `idx_enrolments_student_id` reduces the lookup complexity to `O(log N)`, ensuring high-speed join operations even as the student body and enrollment history grow to millions of records.

*(Note: The composite `UNIQUE (student_id, course_id)` constraint creates an index starting with `student_id`, but adding an explicit index on `enrolments(course_id)` is equally recommended for reverse joins.)*

---

## 4. Architecture Evaluation: SQL vs. NoSQL

For this school management system, **SQL (Relational Database)** is unequivocally the superior choice. Academic institutions require strict ACID compliance, data consistency, and referential integrity: foreign key constraints ensure that grades cannot be orphaned if a student or course is altered, and unique constraints prevent duplicate enrollments at the database engine level. In a document-oriented NoSQL model, course details or student profiles would either need to be duplicated across embedded documents (creating massive data anomalies when course titles or student emails change) or linked using manual application-level joins without native transactional safety. Furthermore, standard administrative workflows require complex aggregations across related entities—such as calculating GPAs, auditing student rosters, and running outer joins to find unenrolled students—which SQL executes natively, reliably, and declaratively.
