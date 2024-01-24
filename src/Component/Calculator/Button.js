import Calculate from "../Logic/Calculate";
function Button({value,setState}) {
 
 
  return(
    <button onClick={() => setState((prevState) => Calculate(prevState, value))} >{value}</button>
  )
}
export default Button;