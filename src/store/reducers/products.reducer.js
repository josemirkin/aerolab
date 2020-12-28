import { SET_HIGHEST_PRICE, SET_LOWEST_PRICE, SET_MOST_RECENT, SET_PRODUCTS, SET_ORIGINAL_PRODUCTS, NEXT_PAGE, PREV_PAGE } from '../actions/actions.types'

const initialState = {
    products: [],
    originalProducts: [],
    page: 1,
    perPage: 16,
    totalItems: 0,
    totalPages: 0,
    sortType: null,
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload.slice(0, state.perPage),
                totalItems: action.payload.length,
                totalPages: action.payload.length / state.perPage
            }
        case SET_ORIGINAL_PRODUCTS:
            return {
                ...state,
                originalProducts: action.payload
            }
        case SET_HIGHEST_PRICE:
            return {
                ...state,
                products: action.payload.slice(0, state.perPage),
                totalItems: action.payload.length,
                totalPages: action.payload.length / state.perPage,
                sortType: 'HIGHEST'
            }
        case SET_LOWEST_PRICE:
            return {
                ...state,
                products: action.payload.slice(0, state.perPage),
                totalItems: action.payload.length,
                totalPages: action.payload.length / state.perPage,
                sortType: 'LOWEST'
            }
        case SET_MOST_RECENT:
            return {
                ...state,
                products: action.payload.slice(0, state.perPage),
                totalItems: action.payload.length,
                totalPages: action.payload.length / state.perPage,
                sortType: null
            }
        case NEXT_PAGE: 
            return {
                ...state,
                ...action.payload,
            }
        case PREV_PAGE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export default productsReducer;