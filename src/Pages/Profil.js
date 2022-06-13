import ProfilHeader from "../Components/ProfilHeader";
import Account from "../Components/Account";

const Profil =()=>{
    return(
     <main className="main bg-dark">

            <ProfilHeader/>

        <h2 className="sr-only">Accounts</h2>

        <Account accountTitle="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
        <Account accountTitle="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
        <Account accountTitle="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>

     </main>
    )
}

export default Profil;