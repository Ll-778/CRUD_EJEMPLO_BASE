CREATE DATABASE IF NOT EXISTS tienda CHARACTER SET utf8mb4;
USE tienda;

CREATE TABLE IF NOT EXISTS articulos (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  nombre        VARCHAR(100)  NOT NULL,
  descripcion   TEXT,
  precio_compra DECIMAL(10,2) NOT NULL,
  precio_venta  DECIMAL(10,2) NOT NULL,
  stock_minimo  INT NOT NULL DEFAULT 0,
  stock_maximo  INT NOT NULL DEFAULT 0,
  imagen        VARCHAR(255)            -- solo la ruta, por ejemplo /uploads/01000008.jpg
);
