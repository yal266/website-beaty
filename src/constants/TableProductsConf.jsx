export const TableProductsConf = [
  { label: "Detalle", campo: "detalle" },
  { label: "Proveedor", campo: "proveedor" },
  { label: "Stock", campo: "unidadesenexistencia" },
  {
    label: "Precio",
    campo: "precio",
    formato: (value) => `S/ ${parseFloat(value).toFixed(2)}`,
  },
];
