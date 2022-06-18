import { createSlice } from "@reduxjs/toolkit";

let DEFAULT_USER_STATE ={
    loading : false,
    data:{
        _id:null,
        email:null,
        firstName:null,
        lastName:null,
        password:null
    },
    // to check if they have token and if token is valid
    auth:null
}

export const usersSlice = createSlice({
    name:'users',
    initialState:DEFAULT_USER_STATE,
    reducers:{}
})


export default usersSlice.reducer;