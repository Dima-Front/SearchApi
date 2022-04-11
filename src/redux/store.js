import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
    cardReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;