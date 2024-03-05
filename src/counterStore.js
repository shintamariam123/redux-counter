import { configureStore } from "@reduxjs/toolkit"; //export const so in {}
import counterSlice from "./counterSlice"; //there is no curly braces because its exported as default

const counterStore = configureStore({
    reducer:{
       counterReducer : counterSlice
    }
})

export default counterStore