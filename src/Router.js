
import {Routes, Route} from 'react-router-dom'
import  Home from './Pages/Home';
import  Error  from './Pages/Error';
import  Profil  from './Pages/Profil';
import  SignIn  from './Pages/SignIn';
import Layout from './Layout/Layout';


// La route profil ne sera accessible qu'à l'utilisateur connecté. 

function Router() {
  return (
    <Layout>
   <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="signIn" element={<SignIn/>}></Route>
     <Route path="profil/:id" element={<Profil/>}></Route>
     <Route path="*" element={<Error />} />
   </Routes>
   </Layout>
  );
}

export default Router;
