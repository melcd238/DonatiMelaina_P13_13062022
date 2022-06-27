import { Link } from "react-router-dom";

const Error =()=>{
    return(
        <main className="main bg-dark">
         <h1>OUUUUUUUPS!!!! <br/> La page que vous demandez <br/> N'existe pas...</h1>
         <p className="errorPage">404</p>
         <Link to="/"> Retournez à la page d'accueil</Link>
        </main>
    )
}

export default Error;