# School Database & Relational Design (Day 6 Assignment)

A comprehensive relational database implementation and architectural specification for an academic school management system.

---

## Deliverables in this Directory

- **`school.sql`**: Complete SQLite-compatible SQL script containing:
  - Table schemas (`students`, `courses`, `enrolments`) with primary keys, foreign keys, `NOT NULL` constraints, unique student emails, and a composite `UNIQUE (student_id, course_id)` constraint preventing duplicate enrollments.
  - Sample dataset inserting 4 students, 4 courses, and 5 enrolments.
  - 5 required queries:
    1. All courses for one student by name (`JOIN`).
    2. All students on one course (`JOIN`).
    3. Total enrolled students per course (`LEFT JOIN` and `GROUP BY`).
    4. Students with no enrollments (`LEFT JOIN ... WHERE e.id IS NULL`).
    5. Update of an enrollment grade with verification query.
- **`school-design.md`**: Architectural design documentation explaining:
  - Table roles and attributes.
  - Relationship analysis (one-to-many, many-to-many, and join table necessity).
  - Performance indexing recommendation with operational rationale.
  - Technical justification for selecting SQL over NoSQL.

---

## How to Run & Verify

### Option 1: Using Python
```bash
python3 -c "
import sqlite3
with open('school.sql') as f:
    sql = f.read()
con = sqlite3.connect(':memory:')
con.executescript(sql)
print('All SQL executed cleanly with zero errors!')
"
```

### Option 2: SQLite Online Playground
1. Visit [sqliteonline.com](https://sqliteonline.com).
2. Paste the contents of `school.sql` into the SQL editor.
3. Click **Run** to view all tables and query results.
