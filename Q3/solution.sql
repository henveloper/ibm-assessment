select 
	o.owner_id as owner_id,
	o.owner_name as owner_name,
	count(distinct m.category_id) as different_category_count
from ibm.owner o
inner join ibm.article a on o.owner_id = a.owner_id 
inner join ibm.category_article_mapping m on a.article_id = m.article_id
group by o.owner_id, o.owner_name
order by different_category_count desc;


-- setup

-- CREATE TABLE ibm.owner(
--     owner_id varchar(255),
-- 	owner_name varchar(255)
-- );

-- CREATE TABLE ibm.article(
--     article_id varchar(255),
-- 	article_title varchar(255),
-- 	article_content varchar(255),
-- 	owner_id varchar(255)
-- );

-- CREATE TABLE ibm.category_article_mapping(
--     category_id varchar(255),
--     article_id varchar(255)
-- );

-- insert into ibm.owner values ("1", "Ben");
-- insert into ibm.owner values ("2", "Den");
-- insert into ibm.article values ("1", "aye1", "ayy", "1");
-- insert into ibm.article values ("2", "aye2", "ayy", "1");
-- insert into ibm.article values ("3", "aye3", "ayy", "1");
-- insert into ibm.article values ("4", "aye4", "ayy", "2");
-- insert into ibm.category_article_mapping values  ("1", "1");
-- insert into ibm.category_article_mapping values  ("2", "2");
-- insert into ibm.category_article_mapping values  ("2", "3");
-- insert into ibm.category_article_mapping  values ("3", "4");

-- select 
-- 	o.owner_id as owner_id,
-- 	o.owner_name as owner_name,
-- 	count(distinct m.category_id) as different_category_count
-- from ibm.owner o
-- inner join ibm.article a on o.owner_id = a.owner_id 
-- inner join ibm.category_article_mapping m on a.article_id = m.article_id
-- group by o.owner_id, o.owner_name;