import React from "react";
import { ApiWebURL } from "../../utils";
import nofoto from "../../assets/images/nofoto.jpg";
import { RiCloseLine } from "@remixicon/react";

const ProductsView = ({
  productoSeleccionado,
  cantidadProducto,
  setCantidadProducto,
  agregarCarrito,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="vistaRapidaModal"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div className="bg-white rounded-lg w-full max-w-4xl mx-4 relative">
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <RiCloseLine />
        </button>
        <div className="p-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <img
                src={
                  productoSeleccionado.imagengrande === null
                    ? nofoto
                    : ApiWebURL + productoSeleccionado.imagengrande
                }
                className="w-full h-auto object-cover rounded"
                alt={productoSeleccionado.nombre}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2
                className="text-2xl font-semibold mb-4"
                id="productModalLabel"
              >
                {productoSeleccionado.nombre}
              </h2>
              <TablaDetalle
                producto={productoSeleccionado}
                cantidadProducto={cantidadProducto}
                setCantidadProducto={setCantidadProducto}
              />
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  agregarCarrito(productoSeleccionado, cantidadProducto);
                  setCantidadProducto(1);
                }}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
