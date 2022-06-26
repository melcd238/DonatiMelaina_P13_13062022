import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const AuthGuard = (props) =>{
    const users = useSelector((state)=> state.users);
    let location = useLocation();
   

    if((users.auth === null || !users.auth) && users.data.token === null){
        return <Navigate to="/login" state={{from :location}} replace />
    }
        return props.children
}

export default AuthGuard;