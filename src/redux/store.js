import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./products/reducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import categoryReducer from "./category/reducer";




const reducer=combineReducers({
    product:productReducer,
    category:categoryReducer
})


const store=createStore(reducer,applyMiddleware(logger,thunk))

export default store