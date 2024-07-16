import React from "react";
import { ApiWebURL } from "../utils";

function ProductsMain({ codigoCategoria }) {
  const [listaProductos, setListaProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState([]);
  const [cantidadProducto, setCantidadProducto] = useState(1);

  useEffect(() => {
    leerServicio(codigoCategoria);
  }, [codigoCategoria]);

  const leerServicio = (idcategoria) => {
    const rutaServicio = ApiWebURL + "productos.php?idcategoria=" + idcategoria;
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListaProductos(data);
      });
  };

  const mostrarVistaRapida = (event) => {
    event.currentTarget
      .querySelector(".icono-vista-rapida")
      .classList.add("icono-vista-rapida-mostrar");
  };

  const ocultarVistaRapida = (event) => {
    event.currentTarget
      .querySelector(".icono-vista-rapida")
      .classList.remove("icono-vista-rapida-mostrar");
  };

  const leerProductoSeleccionado = (idproducto) => {
    const rutaServicio = ApiWebURL + "productos.php?idproducto=" + idproducto;
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductoSeleccionado(data[0]);
      });
  };

  return (
    <>
      <CuadriculaProductos
        listaProductos={listaProductos}
        mostrarVistaRapida={mostrarVistaRapida}
        ocultarVistaRapida={ocultarVistaRapida}
        leerProductoSeleccionado={leerProductoSeleccionado}
      />
      <VistaRapidaModal
        productoSeleccionado={productoSeleccionado}
        cantidadProducto={cantidadProducto}
        setCantidadProducto={setCantidadProducto}
        agregarCarrito={agregarCarrito}
      />
    </>
  );
}

export default ProductsMain;
