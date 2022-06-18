
import Button from "./Button"

const Account = (props)=>{
    return(
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{props.accountTitle}</h3>
          <p className="account-amount">{props.amount}</p>
          <p className="account-amount-description">{props.description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button value="transaction-button">View transaction</Button>
        </div>
      </section>

    )
}

export default Account 