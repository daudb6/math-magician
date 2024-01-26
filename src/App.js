import Calculator from "./Component/Calculator/Calculator";
import Quote from "./Component/Quote/Quote";
import { Routes,Route,} from "react-router-dom";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";


function App() {
  return(
    <>
    <Navbar />
    
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Calculator" element={<Calculator />}/>
    <Route path="/Quote" element={<Quote />}/>
   </Routes>
   
    </>
  )
}

export default App;
