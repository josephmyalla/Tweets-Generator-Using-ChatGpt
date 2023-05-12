const Button = ({buttonClick,buttonTitle,buttonStyle}) =>(
    <div onClick={buttonClick} className={buttonStyle}>
    {buttonTitle}
  </div>
)

export default Button

