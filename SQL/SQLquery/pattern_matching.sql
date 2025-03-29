use collage;


-- Create the student table
CREATE  TABLE if not exists student_2 (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    email VARCHAR(100),
    course_id INT
);

-- Insert sample data into student table
INSERT ignore INTO student_2 (student_id, name, age, email, course_id) VALUES
(1, 'Alice Johnson', 20, 'alice@example.com', 1),
(2, 'Bob Smith', 22, 'bob@example.com', 2),
(3, 'Charlie Brown', 19, 'charlie@example.com', 1),
(4, 'David Miller', 21, 'david@example.com', 3),
(5, 'Eva Wilson', 23, 'eva@example.com', 4),
(7, 'Alice Johnsfson', 23, 'aliaaace@example.com', 1);

-----------------------------------------
-- Pattern Matching Using LIKE Operator --
-----------------------------------------

-- 1. Find Students whose name starts with "Alice"
SELECT * FROM student 
WHERE name LIKE 'Alice%';
-- Matches: "Alice Johnson" and "Alice Johnsfson"

-- 2. Find Students whose email contains "example"
SELECT * FROM student 
WHERE email LIKE '%example%';
-- All emails in our sample contain "example.com"

-- 3. Find Students whose name ends with "son"
SELECT * FROM student 
WHERE name LIKE '%son';
-- Matches: Names ending with "son" (e.g., "Alice Johnson")

-- 4. Find Students whose name is exactly 5 characters long
SELECT * FROM student 
WHERE name LIKE '_____';
-- Uses five underscores to match names of exactly 5 characters (likely no match with current data)

--------------------------------------------
-- Pattern Matching Using REGEXP Operator ---
--------------------------------------------

-- 5. Find Names That Start With a Vowel
SELECT name FROM student 
WHERE name REGEXP '^[AEIOUaeiou]';
-- Matches any name that begins with a vowel (A, E, I, O, U)

-- 6. Find Emails That End With ".com"
SELECT email FROM student 
WHERE email REGEXP '\\.com$';
-- The pattern '\\.com$' matches strings that end with ".com" (note the double escape for the dot)

-- 7. Find Names Containing Exactly Two Consecutive Vowels
SELECT name FROM student 
WHERE name REGEXP '[AEIOUaeiou]{2}';
-- Matches names containing any two vowels in a row (for example, "Alice" has "ic" but doesn't match; names like "Aaron" might match)

-- 8. Find Names With Either "John" or "Alice" Anywhere in the Name
SELECT name FROM student 
WHERE name REGEXP 'John|Alice';
-- Matches names containing "John" or "Alice"

-- 9. Find Names That Do Not Contain Any Digits
SELECT name FROM student 
WHERE name NOT REGEXP '[0-9]';
-- Ensures that no digits appear in the name

-- 10. Find Names That End With "son" using REGEXP
SELECT name FROM student 
WHERE name REGEXP 'son$';
-- Matches names ending with "son" (e.g., "Alice Johnson", "Alice Johnsfson")

-- 11. Find Names Where the Second Character Is "a"
SELECT name FROM student 
WHERE name REGEXP '^.a';
-- '^.' matches any first character, and 'a' requires that the second character is "a"
