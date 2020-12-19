import { SET_HIGHEST_PRICE, SET_LOWEST_PRICE, SET_MOST_RECENT, SET_PRODUCTS } from '../actions/actions.types'

const initialState = {
    products: [],
    originalProducts: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case SET_HIGHEST_PRICE:
            return {
                ...state,
                products: action.payload,
            }
        case SET_LOWEST_PRICE:
            return {
                ...state,
                products: action.payload,
            }
        case SET_MOST_RECENT:
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state
    }
}

export default productsReducer;