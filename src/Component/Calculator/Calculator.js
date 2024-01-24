import './Calculator.css';
import Button from './Button';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const initialState = {
  next:null,
  total:null,
  operation:null
}
function Calculator() {
const[calculaterState, setCalculaterState] = useState(initialState);


function display() {
 if (calculaterState.operation && !calculaterState.next){
  return(`${calculaterState.total || ""} ${calculaterState.operation}`)
 }
 if (calculaterState.operation && calculaterState.next){
  return(`${calculaterState.total || ""} ${calculaterState.operation} ${calculaterState.next}` )
 }
  return(
    calculaterState.next || calculaterState.operation || calculaterState.total || "0"
  )

}
  
  return(
    <>
    <Navbar />
    <div className='container'>
    <div className='left-side'>Lets Do Some Math!</div>
    <div className="c-main">
      <div className='main-display'>
      <div className="display">{display()}</div>
      </div>
      <div className="row-button">
        
        <Button  value = "Ac" setState = {setCalculaterState} />
        <Button  value = "+/-"setState = {setCalculaterState} />
        <Button  value = "%" setState = {setCalculaterState} />
        <Button  value = "/" setState = {setCalculaterState} />
           
      </div>

      <div className="row-button">
      <Button  value = "7"  setState = {setCalculaterState}/>
      <Button  value = "8"  setState = {setCalculaterState} />
      <Button  value = "9" setState = {setCalculaterState} />
      <Button  value = "X" setState = {setCalculaterState} />
      </div>

      <div className="row-button">
      <Button  value = "4"  setState = {setCalculaterState} />
      <Button  value = "5"  setState = {setCalculaterState} />
      <Button  value = "6"  setState = {setCalculaterState} />
      <Button  value = "-"  setState = {setCalculaterState} />
      </div>

      <div className="row-button">
      <Button  value = "1"  setState = {setCalculaterState} />
      <Button  value = "2" setState = {setCalculaterState} />
      <Button  value = "3" setState = {setCalculaterState} />
      <Button  value = "+" setState = {setCalculaterState} />
      </div>

      <div className="row-button last">
      <Button className='btn1'  value = "0"  setState = {setCalculaterState} />
      <Button  value = "." setState = {setCalculaterState} />
      <Button  value = "=" setState = {setCalculaterState} />
        
      </div>
    </div>
    </div>
    </>
  )

}
export default Calculator;

