import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesReducer"
import userReducer from "./userReducer";

const store = {
    cities : citiesReducer,
    user: userReducer
}
     
export default configureStore({
        reducer: store 
    })
