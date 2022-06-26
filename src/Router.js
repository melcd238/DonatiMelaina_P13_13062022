
import {Routes, Route} from 'react-router-dom'
import  Home from './Pages/Home';
import  Error  from './Pages/Error';
import  Profil  from './Pages/Profil';
import  SignIn  from './Pages/SignIn';
import Layout from './Layout/Layout';
import AuthGuard from './HOC/authGuard';



function Router() {


  return (
    <Layout>
   <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="login" element={<SignIn/>}></Route>
     <Route path="profil" element={<AuthGuard><Profil/></AuthGuard>}></Route>  
     <Route path="*" element={<Error />} />
   </Routes>
   </Layout>
  );
}

export default Router;
