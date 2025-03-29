use  collage;
select * from student_2 ;
create index idx_name_age on student_2(name ,age );
select name , age  from student_2 where age>=21;