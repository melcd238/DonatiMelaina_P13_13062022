import { Navigate, useLocation } from "react-router-dom";


const PreventSignIn = (props)=>{
    let location = useLocation();
   

    if(props.users.auth === true && props.users.data.token !== null){
        return <Navigate to="/profil" state={{from :location}} replace />
    }
        return props.children
}

export default PreventSignIn