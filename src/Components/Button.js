

const Button = ({children,value, typeOfBtn})=>{
    return(
        <button className={value} type={typeOfBtn}>{children}</button>
    )

}

export default Button;