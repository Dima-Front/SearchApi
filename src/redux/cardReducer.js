import {ADD_RESULT, CLEAR_RESULT, IS_FETCHING} from "./cardsActions";


let initialState = {
    results: [],
    isLoading: false,
}


const cardReducer = (state = initialState, action) => {
    switch (action.type) {

        case IS_FETCHING:
            return {
                ...state, isLoading: action.payload
            }


        case ADD_RESULT:
            return {
                ...state, results: action.payload,
            }


        case CLEAR_RESULT:
            return {
                ...state, results: []
            }

        default:
            return state
    }
}

export default cardReducer;