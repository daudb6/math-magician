import './Calculator.css';
import Button from './Button';
function Calculator() {
  
  return(
    <div className="c-main">
      <div className="display">0</div>
      <div className="row-button">
        
        <Button value = "Ac"/>
        <Button value = "+/-"/>
        <Button value = "%"/>
        <Button value = "/"/>
           
      </div>

      <div className="row-button">
      <Button value = "7" />
      <Button value = "8"  />
      <Button value = "9" />
      <Button value = "X" />
      </div>

      <div className="row-button">
      <Button value = "4"  />
      <Button value = "5"  />
      <Button value = "6"  />
      <Button value = "-"  />
      </div>

      <div className="row-button">
      <Button value = "1"  />
      <Button value = "2" />
      <Button value = "3" />
      <Button value = "+" />
      </div>

      <div className="row-button last">
      <Button value = "0"  />
      <Button value = "." />
      <Button value = "=" />
        
      </div>
    </div>
  )

}
export default Calculator;

