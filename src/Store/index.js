import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./Reducers/Users";
import NotificationReducer from './Reducers/Notification'


export const store = configureStore({
    reducer:{
      users: UsersReducer,
      notification: NotificationReducer
    }
})