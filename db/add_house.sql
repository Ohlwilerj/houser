-- Adding a house into SQL DB
INSERT INTO listing 
(name, address, city, state, zip, img, mortgage, rent)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)

