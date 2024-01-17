import './Calculator.css';
import Button from './Button';
import { useState } from 'react';
function Calculator() {
const[calculaterState, setCalculaterState] = useState(null);
  
  return(
    <div className="c-main">
      <div className="display">{calculaterState || '0'}</div>
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
      <Button  value = "0"  setState = {setCalculaterState} />
      <Button  value = "." setState = {setCalculaterState} />
      <Button  value = "=" setState = {setCalculaterState} />
        
      </div>
    </div>
  )

}
export default Calculator;

