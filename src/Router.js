
import {Routes, Route} from 'react-router-dom'
import  Home from './Pages/Home';
import  Error  from './Pages/Error';
import  Profil  from './Pages/Profil';
import  SignIn  from './Pages/SignIn';
import Layout from './Layout/Layout';
//import { useState } from 'react';


// La route profil ne sera accessible qu'à l'utilisateur connecté. 

function Router() {

 // const [currentUser, setCurrentUser] = useState(undefined)
  // on recupère le user dans le sessionStorage 
  /* const getCurrentUser = ()=>{
    return JSON.parse(sessionStorage.getItem("user")
  }

   useEffect(()=>{
  
   const currentUser =getCurrentUser();
      if(currentUser){
        setCurrentUser(currentUser);
      }
      
   
  },[]);


  
  */ 
  return (
    <Layout>
   <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="signIn" element={<SignIn/>}></Route>
     <Route path="profil" element={<Profil/>}></Route>  {/*currentUser ? Route : null */}
     <Route path="*" element={<Error />} />
   </Routes>
   </Layout>
  );
}

export default Router;
