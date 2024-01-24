import Calculator from "./Component/Calculator/Calculator";
import Quote from "./Component/Quote/Quote";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home";


function App() {
  return(
    <>
   <BrowserRouter> 
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Calculator" element={<Calculator />}/>
    <Route path="/Quote" element={<Quote />}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App;
