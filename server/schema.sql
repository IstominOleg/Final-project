CREATE DATABASE delivery;
USE delivery;

DROP TABLE orders;
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  delivery_address VARCHAR(255) NOT NULL,
  pickup_delivery VARCHAR(255) NOT NULL,
  basket_id INT NOT NULL,
  date_time_order DATETIME NOT NULL
);
select * from orders;

DROP TABLE baskets;
CREATE TABLE baskets (
  id INT PRIMARY KEY AUTO_INCREMENT,
  dish_name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  price FLOAT NOT NULL,
  basket_id VARCHAR(255) NOT NULL,
  restaurant_id VARCHAR(255) NOT NULL
);
select * from baskets;

CREATE TABLE menu (
  id INT PRIMARY KEY AUTO_INCREMENT,
  restaurant_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  description VARCHAR(255) NOT NULL
);
select * from menu;

INSERT INTO menu
  (restaurant_id, name, price, description)
VALUES
  ('pizza', 'КЛАССИЧЕСКАЯ', 550, 'Состав классический'),
  ('pizza', 'АССОРТИ', 630, 'Состав ассорти'),
  ('pizza', 'ПО-ГАВАЙСКИ', 550, 'Состав гавайский'),
  ('pizza', 'ИТАЛИЯ', 550, 'Состав итальянский'),
  ('sushi', 'ВЕГЕТТАРИАНСКАЯ', 500, 'Состав веганский'),
  ('sushi', 'ДАРЫ МОРЯ', 650, 'Состав морской'),
  ('sushi', 'МУСУЛЬМАНСКАЯ', 650, 'Состав масульманский'),
  ('sushi', 'ВОСТОЧНАЯ', 650, 'Состав восточный'),
  ('chicken', 'МАРГАРИТА', 550, 'Состав маргаритный'),
  ('chicken', 'БАРБЕКЮ', 550, 'Состав барбикюшный'),
  ('chicken', 'ПЕППЕРОНИ', 500, 'Состав с калбасой вроде'),
  ('chicken', 'ЧЕТЫРЕ СЫРА', 600, 'Состав четыре сыра');