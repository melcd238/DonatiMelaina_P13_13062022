
import ButtonTransaction from "./ButtonTransaction"

const Account = (props)=>{
    return(
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{props.accountTitle}</h3>
          <p className="account-amount">{props.amount}</p>
          <p className="account-amount-description">{props.description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <ButtonTransaction/>
        </div>
      </section>

    )
}

export default Account 