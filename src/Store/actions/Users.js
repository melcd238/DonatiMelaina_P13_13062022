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
    async()=>{
        try {
            const request = await axios.post('http://localhost:3001/api/v1/user/profile',{}, GetAuthHeader())
            console.log(request.data.body)
            return { data: request.data.body, auth:true ,  message: request.data.message}
            
        } catch (error) {
            console.log('ERROR PROFIL')
            return { data: {}, auth:false}
        }
    }
)

export const updateProfilUser = createAsyncThunk(
    'users/getProfilUser',
    async()=>{
        try {
            
        } catch (error) {
            
        }
    }
)