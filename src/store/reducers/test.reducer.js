import {ADD_NUMBER} from '../actions/actions.types'

const initialState = {
    testData: [1,2,3,4,5]
}

const testReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NUMBER: 
            return {
                ...state,
                testData: [...state.testData, action.payload]
            }
        default: 
            return state
    }
} 

export default testReducer;