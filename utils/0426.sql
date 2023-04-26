CREATE TABLE menu_96 (
    id int NOT NULL,
    title varchar(255),
    category varchar(255),
    price real,
    img varchar(255),
    descrip text,
    primary key (id)
);

INSERT INTO menu_96 (id, title, category, price, img, descrip)
VALUES
(1,'buttermilk pancakes','breakfast',15.59,'/menu/images/item-1.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam.'),
(2,'diner double','dessert',13.99,'/menu/images/item-2.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita '),
(3,'godzilla milkshake','shakes',6.99,'/menu/images/item-3.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(4,'Country Delight','lunch',20.99,'/menu/images/item-4.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(5,'Egg Attack','breakfast',2.99,'/menu/images/item-5.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(6,'Oreo Dream','shakes',18.99,'/menu/images/item-6.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(7,'Bacon Overflow','breakfast',8.99,'/menu/images/item-7.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(8,'American Classic','lunch',12.99,'/menu/images/item-8.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(9,'Quarantine Buddy','lunch',13.99,'/menu/images/item-9.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita')
