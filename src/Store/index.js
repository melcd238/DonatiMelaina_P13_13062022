import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Reducers/Auth"


export const store = configureStore({
    reducer:{
      auth: AuthSlice
    }
})