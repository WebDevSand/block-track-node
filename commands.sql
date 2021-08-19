CREATE DATABASE Bamazon;

USE Bamazon

CREATE TABLE Products (ItemID int AUTO_INCREMENT PRIMARY KEY, ProductName varchar(30), DepartmentName varchar(30), Price decimal(6,2), StockQuantity int);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Learn to Code Book', 'Books', 18.95, 37);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Mass Effect 3', 'Video Games', 26.50, 18);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Dell XPS 13', 'Electronics', 899.98, 7);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Hoover Vacuum', 'Appliances', 167.34, 22);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Playstation 4', 'Electronics', 349.97, 4);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Running Sneakers', 'Footwear', 74.59, 65);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Band T-shirt', 'clothing', 19.50, 94);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Down Comforter', 'bedding', 46.89, 29);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Diamond Necklace', 'Jewlery', 524.76, 6);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Blendtec Blender', 'Kitchen', 369.99, 15);

SELECT * FROM products;
+--------+--------------------+----------------+--------+---------------+
| ItemID | ProductName        | DepartmentName | Price  | StockQuantity |
+--------+--------------------+----------------+--------+---------------+
|      1 | Learn to Code Book | Books          |  18.95 |            37 |
|      2 | Mass Effect 3      | Video Games    |  26.50 |            18 |
|      3 | Dell XPS 13        | Electronics    | 899.98 |             7 |
|      4 | Hoover Vacuum      | Appliances     | 167.34 |            22 |
|      5 | Playstation 4      | Electronics    | 349.97 |             4 |
|      6 | Running Sneakers   | Footwear       |  74.59 |            65 |
|      7 | Band T-shirt       | clothing       |  19.50 |            94 |
|      8 | Down Comforter     | bedding        |  46.89 |            29 |
|      9 | Diamond Necklace   | Jewlery        | 524.76 |             6 |
|     10 | Blendtec Blender   | Kitchen        | 369.99 |            15 |
+--------+--------------------+----------------+--------+---------------+