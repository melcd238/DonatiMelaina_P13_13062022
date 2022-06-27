import axios from 'axios';
import { createAsyncThunk} from '@reduxjs/toolkit';
import { errorGlobal, successGlobal} from '../Reducers/Notification';
import { GetAuthHeader } from '../../Utils/Tools'




export const loginUser = createAsyncThunk(
    'users/loginUser',
    async({email,password}, {dispatch})=>{
        try {
           const request = await axios.post('http://localhost:3001/api/v1/user/login' ,{
               email:email,
               password: password
           });
           dispatch(successGlobal(request.data.message))
           return{ data : request.data.body, auth:true , message: request.data.message}
        } catch (error) {
            dispatch(errorGlobal('Sorry! Something wrong with your Email or Password!'))
            throw error
        }

    }
)

export const getProfilUser = createAsyncThunk(
    'users/getProfilUser',
    async(token, {dispatch})=>{
        try {
            const headers =  GetAuthHeader(token)
            const request = await axios.post('http://localhost:3001/api/v1/user/profile',{}, headers)
            dispatch(successGlobal(request.data.message))
            return { data: request.data.body, auth:true, message:request.data.message}
            
        } catch (error) {
            dispatch(errorGlobal('Sorry! You are not authorized!'))
            return { data: {}, auth:false}
        }
    }
)

export const updateProfilUser = createAsyncThunk(
    'users/updateProfilUser',
    async(userData,{dispatch})=>{
        const token = userData.token
        const firstName = userData.values.firstName
        const lastName = userData.values.lastName
        try {
            const headers =  GetAuthHeader(token)
            const request = await axios.put('http://localhost:3001/api/v1/user/profile',{firstName,lastName}, headers )
            dispatch(successGlobal(request.data.message))
            return { data: request.data.body, auth:true, message:request.data.message}
        } catch (error) {
            dispatch(errorGlobal('Sorry! You are not authorized!'))
            throw error
        }
    }
)

export const signOutUser = createAsyncThunk(
    'users/signOutUser',
    async( data , {dispatch})=>{
        dispatch(successGlobal("You are logout! If you want to sign in, click on the link above "))
        return {data: {}, auth:false, message:""}
    }
)