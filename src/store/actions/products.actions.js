import ProductsService from "../../services/products.service"
import { SET_PRODUCTS } from "./actions.types"

export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await ProductsService.getProducts()
        console.log(data, 'data')
        dispatch({
            type: SET_PRODUCTS,
            payload: data
        })
    } catch (error) {
        console.log(error, 'error')
    }
}