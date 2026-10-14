CREATE DATABASE IF NOT EXISTS tienda CHARACTER SET utf8mb4;
USE tienda;

CREATE TABLE IF NOT EXISTS ARTICULOS (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  descripcion TEXT,
  precio_compra DECIMAL(10,2),
  precio_venta DECIMAL(10,2),
  stock_minimo INT DEFAULT 0,
  stock_maximo INT DEFAULT 0,
  imagen VARCHAR (255) -- Solo la ruta, por ejemplo /uploads/0100008.png
);