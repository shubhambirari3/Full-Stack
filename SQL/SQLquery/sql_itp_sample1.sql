--refer this GPT: https://chatgpt.com/share/678caa9e-3698-8003-85dd-235069fa6257

 CREATE DATABASE IF NOT EXISTS StudentDemo;
use StudentDemo;
create table IF NOT EXISTS student (
student_id int primary key,
first_name varchar(50),
last_name varchar(50),
dob date,
email varchar(50)
);
create table IF NOT EXISTS courses (
course_id int primary key,
course_name varchar(50),
credit int
);

create table IF NOT EXISTS joining (
joining_id int primary key,
student_id int,
course_id int ,
foreign key(student_id) references student(student_id),
foreign key(course_id) references courses(course_id)
);

show tables
-- Query 1: Select all records from the `joining` table
SELECT * FROM joining;

-- Query 2: Describe the structure of the `student` table
DESCRIBE student;

-- Query 3: Insert data into the `student` table, avoiding duplicates
INSERT IGNORE INTO student (student_id, first_name, last_name, dob, email)
VALUES (1, 'John', 'Doe', '2000-01-01', 'john.doe@example.com');

-- Query 4: Insert data into the `courses` table, avoiding duplicates
INSERT IGNORE INTO courses (course_id, course_name, credit)
VALUES (101, 'Mathematics', 3);

-- Query 5: Insert data into the `joining` table, avoiding duplicates
INSERT IGNORE INTO joining (joining_id, student_id, course_id)
VALUES (1, 1, 101);

-- Query 6: Join `student` and `courses` tables via `joining` to fetch related data
SELECT student.first_name, student.last_name, courses.course_name
FROM joining 
INNER JOIN student ON joining.student_id = student.student_id
INNER JOIN courses ON joining.course_id = courses.course_id;

-- Query 7: Select all records from the `student` table
SELECT * FROM student;

-- Insert multiple rows into the `student` table
INSERT IGNORE INTO student (student_id, first_name, last_name, dob, email)
VALUES 
(0, 'John', 'Doe', '2000-01-01', 'john.doe@example.com'),
(2, 'Alice', 'Smith', '1999-12-12', 'alice.smith@example.com'),
(3, 'Bob', 'Brown', '2001-03-15', 'bob.brown@example.com'),
(4, 'Carol', 'White', '2002-07-21', 'carol.white@example.com'),
(5, 'Dave', 'Johnson', '1998-09-05', 'dave.johnson@example.com');

-- Insert multiple rows into the `courses` table
INSERT IGNORE INTO courses (course_id, course_name, credit)
VALUES 
(100, 'Mathematics', 3),
(102, 'Physics', 4),
(103, 'Chemistry', 3),
(104, 'Computer Science', 4),
(105, 'Biology', 3);

-- Insert rows into the `joining` table to link students and courses
INSERT IGNORE INTO joining (joining_id, student_id, course_id)
VALUES 
(0, 0, 100), -- John enrolled in Mathematics
(2, 2, 102), -- Alice enrolled in Physics
(3, 3, 103), -- Bob enrolled in Chemistry
(4, 4, 104), -- Carol enrolled in Computer Science
(5, 5, 105), -- Dave enrolled in Biology
(6, 1, 104), -- John enrolled in Computer Science
(7, 3, 101), -- Bob enrolled in Mathematics
(8, 5, 102); -- Dave enrolled in Physics

select * from joining


