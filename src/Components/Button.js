

const Button = ({children,value, typeOfBtn, onClick})=>{
    return(
        <button className={value} type={typeOfBtn} onClick={onClick} >{children}</button>
    )

}

export default Button;