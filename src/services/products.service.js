import { PRODUCTS_URL } from "./service.url";
import axios from "./axios.config";

const productService = {
  getProducts() {
    return axios.get(PRODUCTS_URL);
  },
};

export default productService;