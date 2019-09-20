-- Adding a house into SQL DB
INSERT INTO listing 
(name, address, city, state, zip)
VALUES ($1, $2, $3, $4, $5)

