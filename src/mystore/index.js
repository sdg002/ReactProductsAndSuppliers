import { createStore, combineReducers } from "redux";
import modelReducer from "./modelReducer";

export default createStore(combineReducers(
    {
        modelData: modelReducer, 
        stateData: null
    }));
