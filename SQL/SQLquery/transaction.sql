create  database if not exists bank ;
use bank ;

create table if not exists bank_account (
account_id int primary key ,
balance decimal(10 ,2)
) ;

insert ignore  bank_account(account_id , balance ) values (1 , 4000.00) , (2 , 5000.00) , (3 , 4000.00) , (4,3434.34) , (5 , 2344.23 );
select * from bank_account;

-- TCL transactions 

START TRANSACTION;

UPDATE bank_account SET balance = balance - 100 WHERE account_id = 1;
UPDATE bank_account SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
select * from bank_account;
START TRANSACTION;
UPDATE bank_account SET balance = balance - 100 WHERE account_id = 1;
UPDATE bank_account SET balance = balance + 100 WHERE account_id = 2;
rollback;
select * from bank_account;
START TRANSACTION;
UPDATE bank_account SET balance = balance - 100 WHERE account_id = 1;
SAVEPOINT after_order;
UPDATE bank_account SET balance = balance + 100 WHERE account_id = 2;
select * from bank_account;
-- Payment failed, roll back to savepoint
ROLLBACK TO SAVEPOINT after_order;
COMMIT;
select * from bank_account;