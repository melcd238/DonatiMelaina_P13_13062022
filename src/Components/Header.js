import { Link } from "react-router-dom";
import Logo from '../img/argentBankLogo.png';
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { clearNotification } from "../Store/Reducers/Notification";
import { showToast } from "../Utils/Tools";

// Affichage conditionel du Header suivant la page à faire 

const Header =()=>{
  const notification = useSelector((state)=>(state.notification))
  const dispatch = useDispatch()

  //to detect the change to notification state
  useEffect(()=>{
    let { global } = notification;
    if(notification && global.error){
        const msg = global.msg ? global.msg : 'Error';
        showToast('ERROR', msg)
        dispatch(clearNotification())
    }else if(notification && global.success){
      const msg = global.msg ? global.msg : 'Success';
      showToast('SUCCESS', msg)
        dispatch(clearNotification())
    }

  },[notification])

    return(
        <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/signIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    )
}

export default Header