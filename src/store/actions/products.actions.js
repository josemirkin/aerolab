import _ from 'lodash'
import ProductsService from "../../services/products.service"
import { SET_HIGHEST_PRICE, SET_LOWEST_PRICE, SET_PRODUCTS, SET_ORIGINAL_PRODUCTS, NEXT_PAGE, PREV_PAGE } from "./actions.types"

export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await ProductsService.getProducts()
        dispatch({
            type: SET_PRODUCTS,
            payload: data
        })
        dispatch({
            type: SET_ORIGINAL_PRODUCTS,
            payload: _.cloneDeep(data)
        })
    } catch (error) {
        console.log(error, 'error')
    }
}

export const highestPrice = () => (dispatch, getState) => {
    const {originalProducts} = getState().stateProducts;
    const orderedProducts = _.cloneDeep(originalProducts).sort((a, b) => b.cost - a.cost)
    dispatch({
        type: SET_HIGHEST_PRICE,
        payload: orderedProducts
    })
}

export const lowestPrice = () => (dispatch, getState) => {
    const {originalProducts} = getState().stateProducts;
    const orderedProducts = _.cloneDeep(originalProducts).sort((a, b) => a.cost - b.cost)
    dispatch({
        type: SET_LOWEST_PRICE,
        payload: orderedProducts
    })
}

export const mostRecent = () => (dispatch, getState) => {
    const {originalProducts} = getState().stateProducts;
    dispatch({
        type: SET_PRODUCTS,
        payload:  _.cloneDeep(originalProducts)
    })
}

export const pageChange = (type) => (dispatch, getState) => {
    const {originalProducts, sortType, perPage, totalPages, page} = getState().stateProducts;
    const orderedProducts = sortType ? _.cloneDeep(originalProducts).sort((a, b) => sortType === 'LOWEST' ? a.cost - b.cost : b.cost - a.cost) : _.cloneDeep(originalProducts)

    if (type === 'NEXT' && page < totalPages) {
        const nextPage = page +1
        dispatch({
            type: NEXT_PAGE,
            payload: {
                products: orderedProducts.slice(nextPage > 1 ? perPage * page : 0, perPage * nextPage),
                page: nextPage
            }
        })
    } else if (type === 'PREV' && page > 1) {
        const nextPage = page -1
        dispatch({
            type: PREV_PAGE,
            payload: {
                products: orderedProducts.slice(nextPage > 1 ? perPage * page : 0, perPage * nextPage),
                page: nextPage
            }
        })
    }
}