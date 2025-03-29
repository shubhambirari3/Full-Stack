-- Step 1: Rename or Create the Database

USE collage;

-- Step 2: Create Course Table
CREATE TABLE course (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    department VARCHAR(50) NOT NULL,
    duration INT CHECK (duration > 0)  -- Course duration in years
);

-- Step 3: Create Student Table with Foreign Key
CREATE TABLE student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),  -- Ensures student is at least 18
    email VARCHAR(100) UNIQUE NOT NULL,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE SET NULL
);

-- Step 4: Insert Sample Data into Course Table
INSERT INTO course (course_name, department, duration) VALUES
('Computer Science', 'Engineering', 4),
('Electronics', 'Engineering', 4),
('Business Administration', 'Management', 3),
('Physics', 'Science', 3);

-- Step 5: Insert Sample Data into Student Table
INSERT INTO student (name, age, email, course_id) VALUES
('Alice Johnson', 20, 'alice@example.com', 1),
('Bob Smith', 22, 'bob@example.com', 2),
('Charlie Brown', 19, 'charlie@example.com', 1),
('David Miller', 21, 'david@example.com', 3),
('Eva Wilson', 23, 'eva@example.com', 4);

-- Step 6: Verify Data Insertion
SELECT * FROM student;
SELECT DISTINCT age FROM student;
insert into 
SELECT * FROM course;

select course_id  , min(duration) from course group by course_id;
select student_id from student having student_id > 3;
INSERT INTO student (name, age, email, course_id) VALUES
('Alice Johnsfson', 23, 'aliaaace@example.com', 1) ;
select distinct age from student; 
select age  from student group by age;
select * from student order by  age desc limit 2;
select * from student where age = 20;
select * from student;
select * from course;
select * from student inner join course 
on student.course_id = course.course_id;

#inner join;
SELECT student.name, course.course_name
FROM student
INNER JOIN course ON student.course_id = course.course_id;

#left  and right join ;
SELECT student.name, course.course_name
FROM student
left JOIN course ON student.course_id = course.course_id;

SELECT student.name, course.course_name
FROM student
right JOIN course ON student.course_id = course.course_id;

#full join ;
-- SELECT student.name, course.course_name
-- FROM student
-- FULL OUTER JOIN course ON student.course_id = course.course_id;
-- #full join not supported in mysql

-- you can use union for this 
-- SELECT students.name, courses.course_name
-- FROM students
-- LEFT JOIN courses ON students.course_id = courses.course_id
-- UNION
-- SELECT students.name, courses.course_name
-- FROM students
-- RIGHT JOIN courses ON students.course_id = courses.course_id;


-- cross join
SELECT student.name, course.course_name
FROM student
CROSS JOIN course;

-- SELF JOIN (Join a Table with Itself)
-- Used when a table references itself, like an employee hierarchy.

select * from student;
SELECT s1.name AS Student1, s2.name AS Student2, s1.age
FROM student s1
JOIN student s2 
ON s1.age = s2.age 
AND s1.student_id <> s2.student_id;

-- s1.age = s2.age → Ensures students have the same age.
-- s1.student_id <> s2.student_id → Ensures no duplicate self-matching.






-- INNER JOIN → Most common, use when you need only matches.
-- LEFT JOIN → Use when you need all records from the left table.
-- RIGHT JOIN → Use when you need all records from the right table.
-- FULL JOIN → Use when you need everything from both tables.
-- CROSS JOIN → Use for pairing all rows.
-- SELF JOIN → Use when the table references itself.





