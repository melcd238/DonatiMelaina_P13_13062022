import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./Reducers/Users";
import NotificationReducer from './Reducers/Notification';
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";


const persistConfig ={
  key:'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, UsersReducer)


export const store = configureStore({
    reducer:{
      users: persistedReducer,
      notification: NotificationReducer,
      middleware: [thunk]
    }
})

export const persistor = persistStore(store)