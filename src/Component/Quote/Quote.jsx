 import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import './Quote.css'

function Quote() {
  
 const [data,setData] = useState(null)
 useEffect(() => {
  const fetchData = async() => {
    const response= await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',{
      headers:{
        'X-Api-Key':"wyOA/yTAdAjhY6hIPUnbXg==woWruhwsEsJdoZzP"
      }
    });

   const result = await response.json();
   console.log(result[0])
 setData(result[0])

  }
  fetchData()
  
 },[])
 
  // if(!data) {
  //   return(
      
  //     <h1 className="loading">loading...</h1>
  //   )
  // }

  return(
    <>
    <Navbar/>
    <div className="container-main">
    
    <div className="box">
      {data ? (
        <div className="tracking-in-expand-fwd-top">
         <p className="para">{data.quote}</p>
         <h1>{data.author}</h1>
         </div>
        

      ):(
        <h1 className="loading">loading...</h1>
      )}
   
    </div>
    </div>

    
    </>


  )}
export default Quote;






// import { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import './Quote.css'

// function Quote() {

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
//         headers: {
//           'X-Api-Key': "wyOA/yTAdAjhY6hIPUnbXg==woWruhwsEsJdoZzP"
//         }
//       });

//       const result = await response.json();
//       console.log(result[0])
//       setData(result[0]);
//     }
//     fetchData();
//   }, [])

//   return (
//     <>
//       <Navbar />
//       <div className="container-main" >
//         <div className="box">
//         {data ? (
//           <div>
//             <p className="para">{data.quote}</p>
//             <h1>{data.author}</h1>
//           </div>
//         ) : (
//           <div className="loading-container">
//             <h1 className="loading">Loading...</h1>
//           </div>
//         )}
//       </div>
//       </div>
//     </>
//   )
// }

// export default Quote;
