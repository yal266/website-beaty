import React from "react";
import { TableProductsConf } from "./TableProductsConf";

const ProductsInfoTable = ({
  producto,
  cantidadProducto,
  setCantidadProducto,
}) => {
  const incrementQuantity = () => {
    setCantidadProducto((prevQuantity) => parseInt(prevQuantity) + 1);
  };

  const decrementQuantity = () => {
    setCantidadProducto((prevQuantity) =>
      Math.max(1, parseInt(prevQuantity) - 1)
    );
  };

  return (
    <table className="w-full border-collapse">
      <tbody>
        {TableProductsConf.map((item, index) => (
          <tr key={index} className="border-b">
            <th className="py-2 px-4 text-left">{item.label}</th>
            <td className="py-2 px-4">
              {item.formato
                ? item.formato(producto[item.campo])
                : producto[item.campo]}
            </td>
          </tr>
        ))}
        <tr className="border-b">
          <th className="py-2 px-4 text-left">Cantidad</th>
          <td className="py-2 px-4">
            <div className="flex items-center">
              <button
                onClick={decrementQuantity}
                className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-l"
              >
                -
              </button>
              <input
                type="number"
                className="w-16 text-center border-t border-b border-gray-300 py-1"
                value={cantidadProducto}
                onChange={(event) => setCantidadProducto(event.target.value)}
                min="1"
              />
              <button
                onClick={incrementQuantity}
                className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-r"
              >
                +
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsInfoTable;
