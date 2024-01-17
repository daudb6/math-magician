function Calculate(prevState,value){
  if (value === 'Ac') {
    return null;
  }
  if(prevState){
    return(prevState+value)
  }
return(value)
}
export default Calculate;