-- Created new table into SQL
-- CREATE TABLE listing (
--   property_id SERIAL PRIMARY KEY,
--   name VARCHAR(255),
--   address VARCHAR(255),
--   city VARCHAR(255),
--   state VARCHAR(2),
--   zip INTEGER
-- );

ALTER TABLE listing
ADD COLOUMN img text,

ALTER TABLE listing
ADD COLUMN mortgage decimal,
ADD COLUMN rent decimal;