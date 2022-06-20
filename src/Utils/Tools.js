import { LinearProgress } from '@mui/material'
import Stack from '@mui/material/Stack';



export const Loader = () =>{
    return(
        <div style={{textAlign:"center"}}>
                <Stack sx={{ width: '100%', color: 'grey.500' }}>
     
                   <LinearProgress color="success" />
    
                </Stack>
        </div>
    )

}