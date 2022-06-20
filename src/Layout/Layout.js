import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout =({children})=>{
    return(
        <div className="container-bank">
        <Header/>
        {children}
        <ToastContainer/>
        <Footer/>
        </div>
    )
}

export default Layout