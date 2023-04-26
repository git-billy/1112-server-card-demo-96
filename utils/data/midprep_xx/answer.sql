CREATE DATABASE midprep_xx;

DROP TABLE product_xx;
TRUNCATE TABLE product_xx;

CREATE TABLE product_xx (
    pId int NOT NULL PRIMARY KEY,
    pName varchar(255),
    cat_id int,
    price real,
    img_url varchar(255),
    FOREIGN KEY (cat_id) REFERENCES category_xx(id) ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO product_xx (pId, pName, cat_id, price, img_url)
VALUES
(1,'Blue Tanktop',4,25,'/crown/img/womens/blue-tank.png'),
(2,'Floral Blouse',4,20,'/crown/img/womens/floral-blouse.png'),
(3,'Floral Dress',4,80,'/crown/img/womens/floral-skirt.png'),
(4,'Red Dots Dress',4,80,'/crown/img/womens/red-polka-dot-dress.png'),
(5,'Brown Brim',1,25,'/crown/img/hats/brown-brim.png'),
(6,'Blue Beanie',1,18,'/crown/img/hats/blue-beanie.png'),
(7,'Brown Cowboy',1,35,'/crown/img/hats/brown-cowboy.png'),
(8,'Grey Brim',1,25,'/crown/img/hats/grey-brim.png')


