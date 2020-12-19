import ProductsService from "../../services/products.service"
import { SET_HIGHEST_PRICE, SET_LOWEST_PRICE, SET_PRODUCTS } from "./actions.types"

export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await ProductsService.getProducts()
        dispatch({
            type: SET_PRODUCTS,
            payload: data
        })
    } catch (error) {
        console.log(error, 'error')
    }
}

export const highestPrice = () => (dispatch, getState) => {
    const {products} = getState().stateProducts;
    const orderedProducts = products.sort((a, b) => b.cost - a.cost)
    dispatch({
        type: SET_HIGHEST_PRICE,
        payload: orderedProducts
    })
}

export const lowestPrice = () => (dispatch, getState) => {
    const {products} = getState().stateProducts;
    const orderedProducts = products.sort((a, b) => a.cost - b.cost)
    dispatch({
        type: SET_LOWEST_PRICE,
        payload: orderedProducts
    })
}

export const mostRecent = () => (dispatch, getState) => {
    dispatch(getProducts())
}