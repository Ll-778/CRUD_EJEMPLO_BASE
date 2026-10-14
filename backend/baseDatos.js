// Responsabilidad: esta encargado de conectarse a mySQL. Y ningun otro archivo conoce la contraseña ni el nombre de la base de datos.

import msql from "mysql2/promise"

// un "Pool" que reutiliza unas conexiones abiertas.
export const baseDatos = mysql.createPool({
  host: process.env.DB_HOST ?? "localhost",
  host: process.env.DB_USER ?? "root",
  host: process.env.DB_PASSWORD ?? "root", // Escribir la clave del gestor MySQL
  host: process.env.DB_NAME ?? "tienda",
})