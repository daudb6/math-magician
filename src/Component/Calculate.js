import Big from "big.js";
function operate(next,operation,total) {
 
  let one = Big(total);
  let two = Big(next);
 

  if (operation === "+"){
    return one.plus(two).toString();
  }

  if (operation === "-"){
    return one.minus(two).toString();
  }
  if (operation === "X"){
    return one.times(two).toString();
  }
  if (operation === "/"){
    try {
      return one.div(two).toString();
    } catch (err) {
      return  "Cannot divide by 0";
    }
  }

  if (operation === "%"){
    try {
      return one.mod(two).toString();
    } catch (err) {
      return  "Cannot moded by 0";
    }
  }

}

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}
function Calculate(prevState,value){
  // agr value Ac button ho tu
  if (value === 'Ac') {
    return {
      next:null,
      total:null,
      operation:null
    }
  }
// agr value number hoi tu jesy 0,1,2,3,4
  if (isNumber(value)) {
    if(value === "0" && prevState === "0") {
      return {}
    }
    if(prevState.next && prevState.next!=="0"){
      return{
        ...prevState,
        next:prevState.next+value,
        
      }
    } 
    return {
      ...prevState,
      next:value    
    }  
  }

  // agr button "." ho tu

  if (value === ".") {
    if (prevState.next){
      if (prevState.next.includes(".")) {
        return {
          ...prevState
        }

      }
      return {
        ...prevState,
        next:prevState.next+value
      }

    }

    
    return {
      ...prevState,
      next:"0."

    }
    
    
  }
  if (value === "=") {
    if (prevState.next && prevState.operation) {
      return{
        next:null,
        total:operate(prevState.next,prevState.operation,prevState.total),
        operation:null
       
      }

    }
    return{}
  }

  if (value === '+/-') {
    if (prevState.next) {
      return { ...prevState, next: (-1 * parseFloat(prevState.next)).toString() };
    }
    if (prevState.total) {
      return { ...prevState, total: (-1 * parseFloat(prevState.total)).toString() };
    }
    return {};
  }
   

  // agr operation phly hi mojood ho tu
 if (prevState.operation){
  if (!prevState.next){
    return{
      ...prevState,
      operation:value
    }
  }
  return{
    next:null,
    operation:value,
    total:operate(prevState.next,prevState.operation,prevState.total)
  }
 }

  // agr button operation ho tu
  return{
    next:null,
    total:prevState.next,
    operation:value
  }
  


  
}

export default Calculate;