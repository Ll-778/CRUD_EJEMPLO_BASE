//Responsabilidad: se tiene las rutas del crud de articulos (Recibir la peticion -> SQL -> Responder)
import{ Router } from "express";
import {baseDatos} from "./baseDatos.js"
import {subirImagen, borrarImagen}from "./subirImagen.js"

const rutas = Router()

// Si una funcion async falla, responde con error 500 en vex de dejar la peticion colganda.
const conManejoDeErrores = funcion => (peticion, respuesta) =>
    funcion(peticion, respuesta).catch(error=>{
      console.error(error)
      respuesta.status(500).json({error: "Error del servidor: " + error.message})
    })

    //Convierte lo que llega del formulario (todo llega como texto) en numeros y valida.
    function leerCampos(cuerpo){
      const articulo = {
        nombre: (cuerpo.nombre ?? "").trim(),
        descripcion: (cuerpo.descripcion ?? "").trim(),
        precio_compra: Number(cuerpo.precio_compra),
        precio_venta: Number(cuerpo.precio_venta),
        stock_minimo: Number(cuerpo.stock_minimo),
        stock_maximo: Number(cuerpo.stock_maximo),
      }
      let mensajeError = null
      if (!articulo.nombre) mensajeError = "El nombre es obligatorio"
      else if ((!articulo.precio_compra >=0) || !(articulo.precio_venta)) mensajeError = "Los precios deben ser numeros positivos"
      else if ((!articulo.stock_minimo >=0) || !(articulo.stock_maximo >=0)) mensajeError = "El stock debe ser un numero positivo"
      else if (articulo.stock_minimo > articulo.stock_maximo) mensajeError = "El estock no puede ser mayor que el maximo"
      return {articulo, mensajeError}
    }

// Listar (Read) todos loa articulos
rutas.get("/:id", conManejoDeErrores(async(peticion, respuesta)=>{
    const [filas]= await baseDatos.query("SELECT * FROM articulos ORDER BY id DESC")
    respuesta.json(filas)
}))

// Listar uno por su ID (Read ID)
rutas.get("/:id", conManejoDeErrores(async(peticion, respuesta)=>{
  const [filas]=await baseDatos.query("SELECT * FROM articulos WHERE id = ?",[peticion.params.id])
  if(!filas.length)return respuesta.status(404).json({error: "Articulo no encontrado"})
      respuesta.json(filas[0])
}))

