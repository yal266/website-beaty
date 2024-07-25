import { API_BASE_URL, PRODUCTS_ENDPOINT } from "../api/APIweb";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${PRODUCTS_ENDPOINT}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Datos recibidos de la API:", data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
