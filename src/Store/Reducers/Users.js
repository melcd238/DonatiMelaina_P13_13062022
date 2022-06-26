import { createSlice } from "@reduxjs/toolkit";
import { loginUser, getProfilUser, updateProfilUser, signOutUser } from '../actions/Users'

let DEFAULT_USER_STATE ={
    loading : false,
    data:{
            id:null,
        email:null,
        firstName:null,
        lastName:null,
        password:null,
        token:null,
    },
    // to check if they have token and if token is valid
    auth:null,
    message:null,
    
}

export const usersSlice = createSlice({
    name:'users',
    initialState:DEFAULT_USER_STATE,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //LOGIN
        .addCase(loginUser.pending,(state)=>{state.loading = true})
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading = false;
            state.data = action.payload.data;  
            state.auth = action.payload.auth;
            state.message = action.payload.message
        })
        .addCase(loginUser.rejected,(state)=>{
            state.loading = false;
         })
         //GETPROFIL
         .addCase(getProfilUser.pending,(state)=>{state.loading = true})
         .addCase(getProfilUser.fulfilled,(state, action)=>{
             state.loading = false;
             state.data = {...state.data,...action.payload.data};  
             state.auth = action.payload.auth;
             state.message = action.payload.message
         })
         .addCase(getProfilUser.rejected,(state)=>{
             state.loading = false;
          })
         //UPDATEPROFIL
         .addCase(updateProfilUser.pending,(state)=>{state.loading = true})
         .addCase(updateProfilUser.fulfilled,(state, action)=>{
             state.loading = false;
             state.data ={...state.data,...action.payload.data};  
             state.auth = action.payload.auth;
             state.message = action.payload.message
         })
         .addCase(updateProfilUser.rejected,(state)=>{
             state.loading = false;
          })
          //SIGNOUT
          .addCase(signOutUser.fulfilled,(state,action)=>{
            state.loading = false;  
            state.data = DEFAULT_USER_STATE.data;
            state.auth = action.payload.auth;
            state.message = action.payload.message
            
        })
    }
})


export default usersSlice.reducer;