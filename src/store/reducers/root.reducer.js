import { combineReducers } from 'redux'
import testReducer from './test.reducer'
import productsReducer from './products.reducer'

const rootReducer = combineReducers({
    test: testReducer,
    stateProducts: productsReducer,
})

export default rootReducer;