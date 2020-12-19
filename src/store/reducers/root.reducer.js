import { combineReducers } from 'redux'
import testReducer from './test.reducer'
import productsReducer from './products.reducer'
import userReducer from './user.reducer'

const rootReducer = combineReducers({
    test: testReducer,
    stateProducts: productsReducer,
    stateUser: userReducer,
})

export default rootReducer;