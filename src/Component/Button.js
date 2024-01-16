function Button({value,Display}) {
  function display() {
    Display(value);

  }
 
  return(
    <button onClick={display}>{value}</button>
  )
}
export default Button;