// Responsabilidad: mostrar un articulo. Esto no pedira ni los datos ni tampoco los modifica, solamente los pinta.
import {URL_BACKEND} from "./apiArticulos"

const enPesos = numero => Number(numero).toLocaleString("es-co", {style: "currency", currency: "COP", maximumFractionDigits: 0})

export default function TarjetaArticulo({articulo, alEditar, alEliminar}) {
  const {nombre, descripcion, precio_compra, precio_venta, stock_minimo, stock_maximo, imagen} = articulo
  const margen = precio_venta - precio_compra

  return (
    <article> className="card"</article>
      {imagen ? <img src={URL_BACKEND + imagen} alt={nombre} /> : <div className="card_sin-imagen">Sin imagen</div>

      <div className="card_cuerpo">
        <h3>{nombre}</h3>

        <p className="card_descripcion">{descripcion}</p>

        <dl className="card_datos">
          <div><dt>Compra</dt><dd>{enPesos(precio_compra)}</dd></div>
          <div><dt>Venta</dt><dd>{enPesos(precio_venta)}</dd></div>
          <div><dt>Stock min.</dt><dd>{stock_minimo}</dd></div>
          <div><dt>Stock max.</dt><dd>{stock_maximo}</dd></div>
        </dl>

      <span className={`card_margen ${margen < 0 ? "card_margen--negativo" : ""}`}>Margen: {enPesos(margen)}</span>

      <div className="card_botones">
        <button onClick={() => alEditar(articulo)}>Editar</button>
        <button className="peligro" onClick={() => alEliminar(articulo)}>Eliminar</button>
      </div>
  )
}
