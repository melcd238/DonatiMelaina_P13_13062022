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
            dispatch(errorGlobal('Sorry! Something wrong happens!'))
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
    async({firstName, lastName},{dispatch})=>{
        try {
            const request = await axios.put('http://localhost:3001/api/v1/user/profile',{firstName, lastName}, GetAuthHeader() )
            dispatch(successGlobal(request.data.message))
            console.log(request.data.body)
            return { data: request.data.body, auth:true, message:request.data.message}
        } catch (error) {
            dispatch(errorGlobal('Sorry! You are not authorized!'))
            throw error
        }
    }
)

export const signOutUser = createAsyncThunk(
    'users/signOutUser',
    async()=>{
        return {data: {}, auth:false, message:""}
    }
)