-- delete house from SQL DB
DELETE FROM listing
WHERE property_id = $1;

SELECT * FROM listing;