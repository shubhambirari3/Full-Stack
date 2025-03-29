-- Drop the table if it already exists
use collage;
select * from student_2;

-- Create the sample student table
CREATE table if not exists  student_2(
    student_id INT,
    name VARCHAR(100),
    age INT,
    email VARCHAR(100),
    course_id INT
);

-- Insert sample data into the student table
INSERT ignore INTO student_2 (student_id, name, age, email, course_id) VALUES
(1, 'Alice Johnson',   20, 'alice@example.com',   1),
(2, 'Bob Smith',       22, 'bob@example.com',     2),
(3, 'Charlie Brown',   19, 'charlie@example.com', 1),
(4, 'David Miller',    21, 'david@example.com',   3),
(5, 'Eva Wilson',      23, 'eva@example.com',     4),
(7, 'Alice Johnsfson', 23, 'aliaaace@example.com',1);

-----------------------------------------------------------
-- Part 1: Using UNION (removes duplicate rows)
-----------------------------------------------------------
-- This query combines two result sets:
-- a) Students enrolled in course_id = 1
-- b) Students whose age is greater than 22
-- UNION returns distinct rows from the combined results.
SELECT name, email
FROM student
WHERE course_id = 1
UNION
SELECT name, email
FROM student
WHERE age > 22;

-----------------------------------------------------------
-- Part 2: Using UNION ALL (includes duplicate rows)
-----------------------------------------------------------
-- This query does the same as above but keeps duplicates if any exist.
SELECT name, email
FROM student
WHERE course_id = 1
UNION ALL
SELECT name, email
FROM student
WHERE age > 22;

-----------------------------------------------------------
-- Part 3: Simulating INTERSECT (common rows in both queries)
-----------------------------------------------------------
-- MySQL does not directly support the INTERSECT operator.
-- We simulate it by joining the two result sets on their common columns.
SELECT a.name, a.email
FROM 
    (SELECT name, email FROM student WHERE course_id = 1) a
INNER JOIN
    (SELECT name, email FROM student WHERE age > 22) b
ON a.name = b.name AND a.email = b.email;
