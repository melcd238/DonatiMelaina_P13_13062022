import { LinearProgress } from '@mui/material'
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';






export const Loader = () =>{
    return(
        <div style={{textAlign:"center"}}>
                <Stack sx={{ width: '100%', color: 'grey.500' }}>
     
                   <LinearProgress color="success" />
    
                </Stack>
        </div>
    )

}

export const showToast =(type, message)=>{
    switch(type){
        case 'SUCCESS':
            toast.success(message,{
                position: toast.POSITION.TOP_RIGHT
            })
            break;
        case 'ERROR':
                toast.error(message,{
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
         default:
             return false          

    }

}

export const GetAuthHeader = (token)=>{
 
    return { headers : {'authorization' : `Bearer ${token}`}}
  
   
}