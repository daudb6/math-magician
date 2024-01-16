import './Calculator.css';
import Button from './Button';
import { useState } from 'react';
function Calculator() {
  const[display,setDisplay] = useState("0");

  function Display(e) {
    setDisplay(e);
    console.log(e)
  }
  
  return(
    <div className="c-main">
      <div className="display">{display}</div>
      <div className="row-button">
        
        <Button Display={Display} value = "Ac"/>
        <Button Display={Display} value = "+/-"/>
        <Button Display={Display} value = "%"/>
        <Button Display={Display} value = "/"/>
           
      </div>

      <div className="row-button">
      <Button Display={Display} value = "7" />
      <Button Display={Display} value = "8"  />
      <Button Display={Display} value = "9" />
      <Button Display={Display} value = "X" />
      </div>

      <div className="row-button">
      <Button Display={Display} value = "4"  />
      <Button Display={Display} value = "5"  />
      <Button Display={Display} value = "6"  />
      <Button Display={Display} value = "-"  />
      </div>

      <div className="row-button">
      <Button Display={Display} value = "1"  />
      <Button Display={Display} value = "2" />
      <Button Display={Display} value = "3" />
      <Button Display={Display} value = "+" />
      </div>

      <div className="row-button last">
      <Button Display={Display} value = "0"  />
      <Button Display={Display} value = "." />
      <Button Display={Display} value = "=" />
        
      </div>
    </div>
  )

}
export default Calculator;

