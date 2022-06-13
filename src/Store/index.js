import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./Reducers/Users"


export const store = configureStore({
    reducer:{
      users: UsersSlice
    }
})