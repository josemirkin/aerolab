import {PRODUCTS_URL} from './service.url'
import axios from './axios.config'


export default {
    getProducts() {
        return axios.get(PRODUCTS_URL)
    }
}