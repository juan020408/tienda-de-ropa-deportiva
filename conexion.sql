CREATE DATABASE tienda_deportiva;
USE tienda_deportiva;

CREATE TABLE contacto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);