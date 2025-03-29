use collage ;

SET SQL_SAFE_UPDATES = 0;


-- 1. Create table Student with columns: rollno, first_name, last_name, birthdate.
CREATE TABLE if not exists Student3 (
    rollno INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birthdate DATE
);

-- 2. Insert 10 records into Student table.
INSERT ignore INTO Student3 (rollno, first_name, last_name, birthdate) VALUES
(1, 'Alice', 'Johnson', '2000-01-15'),
(2, 'Bob', 'Smith', '1999-05-22'),
(3, 'Charlie', 'Brown', '2001-03-10'),
(4, 'David', 'Miller', '2000-12-05'),
(5, 'Eva', 'Wilson', '1998-07-30'),
(6, 'Frank', 'Garcia', '2000-11-11'),
(7, 'Grace', 'Lee', '1999-09-09'),
(8, 'Hannah', 'Martinez', '2001-04-17'),
(9, 'Ian', 'Clark', '2000-08-24'),
(10, 'Jane', 'Davis', '1998-02-28');

-- 3. Add 3 duplicate records into table.
-- (Here, duplicate means same first_name, last_name, and birthdate as an existing record; rollno is unique.)
INSERT INTO Student3 (rollno, first_name, last_name, birthdate) VALUES
(11, 'Alice', 'Johnson', '2000-01-15'),
(12, 'Bob', 'Smith', '1999-05-22'),
(13, 'Charlie', 'Brown', '2001-03-10');

-- 4. Fetch unique records from table.
-- Use DISTINCT on columns to avoid duplicates (based on first_name, last_name, birthdate).
SELECT DISTINCT first_name, last_name, birthdate
FROM Student3;

-- 5. Display first_name, last_name from Student.
SELECT first_name, last_name FROM Student3;

-- 6. Display specific record from Student.
-- For example, display the record where rollno = 5.
SELECT * FROM Student3
WHERE rollno = 5;

-- 7. Update duplicate records.
-- For demonstration, update the duplicate record with rollno = 11 (e.g., append '_dup' to first_name).
UPDATE Student3
SET first_name = CONCAT(first_name, '_dup')
WHERE rollno = 11;

-- 8. Add new column i.e. percentage in Student table.
ALTER TABLE Student3
ADD COLUMN percentage DECIMAL(5,2);

-- 9. Rename column.
-- For example, rename the newly added column 'percentage' to 'perc'.
ALTER TABLE Student3
CHANGE COLUMN percentage perc DECIMAL(5,2);
-- Note: In MySQL, CHANGE COLUMN requires the new column name and its data type.

-- 10. Update all records add value in newly created column.
-- For example, set all students' perc to 75.50.
UPDATE Student3
SET perc = 75.50;

-- 11. Remove percentage column from table.
-- Drop the column 'perc'.
ALTER TABLE Student3
DROP COLUMN perc;

-- 12. Delete specific record from table.
-- For example, delete the record where rollno = 10.
DELETE FROM Student3
WHERE rollno = 10;

-- 13. Truncate table.
TRUNCATE TABLE Student3;
-- Note: This removes all rows but keeps the table structure intact.

-- 14. Drop table.
DROP TABLE Student3;


-- 1. Create table productCustomer with columns: cust_id, cust_name, address, product_name, brand, price.
CREATE   TABLE if not exists productCustomer (
    cust_id INT PRIMARY KEY,
    cust_name VARCHAR(100),
    address VARCHAR(200),
    product_name VARCHAR(100),
    brand VARCHAR(50),
    price DECIMAL(10,2)
);

-- 2. Insert 10 records into productCustomer (specifying brand among LG, Samsung, bajaj, hp).
INSERT ignore INTO productCustomer (cust_id, cust_name, address, product_name, brand, price) VALUES
(1, 'John Doe', '123 Main St', 'Smartphone', 'Samsung', 500.00),
(2, 'Jane Smith', '456 Oak Ave', 'Laptop', 'hp', 800.00),
(3, 'Alice Brown', '789 Pine Rd', 'Refrigerator', 'LG', 600.00),
(4, 'Bob Johnson', '321 Elm St', 'Television', 'Samsung', 450.00),
(5, 'Charlie Davis', '654 Maple Ave', 'Microwave', 'bajaj', 150.00),
(6, 'Diana Evans', '987 Cedar Blvd', 'Smartphone', 'Samsung', 550.00),
(7, 'Eric Wilson', '147 Birch Ln', 'Laptop', 'hp', 900.00),
(8, 'Fiona Garcia', '258 Spruce Dr', 'Washing Machine', 'LG', 700.00),
(9, 'George Harris', '369 Walnut St', 'Television', 'Samsung', 480.00),
(10, 'Helen Clark', '159 Ash Ct', 'Air Conditioner', 'bajaj', 350.00);

-- 3. Add contact_number column into productCustomer.
ALTER TABLE productCustomer
ADD COLUMN contact_number VARCHAR(20);

-- 4. Update all records (set a sample contact number for all).
UPDATE productCustomer
SET contact_number = '123-456-7890';

-- 5. Display cust_name in upper_case, product_name in lower_case.
SELECT UPPER(cust_name) AS cust_name_upper,
       LOWER(product_name) AS product_name_lower
FROM productCustomer;

-- 6. Display cust_id, cust_name with contact_number, address (specify alias for each column).
SELECT cust_id AS Customer_ID,
       cust_name AS Customer_Name,
       contact_number AS Contact_Number,
       address AS Address
FROM productCustomer;

-- 7. Display maximum price from each brand.
SELECT brand, MAX(price) AS Max_Price
FROM productCustomer
GROUP BY brand;

-- 8. Display count of customers.
SELECT COUNT(*) AS Total_Customers
FROM productCustomer;

-- 9. Display minimum price from each brand.
SELECT brand, MIN(price) AS Min_Price
FROM productCustomer
GROUP BY brand;

-- 10. Display average price of each brand.
SELECT brand, AVG(price) AS Avg_Price
FROM productCustomer
GROUP BY brand;

-- 11. Display count of products of each brand.
SELECT brand, COUNT(product_name) AS Product_Count
FROM productCustomer
GROUP BY brand;

