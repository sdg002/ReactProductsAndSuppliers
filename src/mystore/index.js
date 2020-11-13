import { createStore, combineReducers } from "redux";
import modelReducer from "./modelReducer";
import productReducer from "./productReducer"

export default createStore(combineReducers(
    {
        modelData: modelReducer, 
        stateData: null,
        productData:productReducer
    }));

    /*
    If you have a complex model, then you should combine the reducers based on functionality
    Each of the elements above becomes a property of the 'store' object that is returned by 'createStore'
    
    */