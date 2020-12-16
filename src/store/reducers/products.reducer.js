import {SET_PRODUCTS} from '../actions/actions.types'

const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        default: 
            return state
    }
} 

export default productsReducer;