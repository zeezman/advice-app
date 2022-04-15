import React,{useState} from "react";
import axios from 'axios' 
import Email from "./Email";

 const App = () => {
   const [advice, setAdvice] = useState("");

  const handleAdvice = () => {
     axios.get('https://api.adviceslip.com/advice')
       .then((response) => {
         // handle success 
        setAdvice(response.data.slip.advice ); 
        
       })
       .catch(function (error) {
         // handle error
         console.log(error);
       }) 
   }
   
   return (
     <div className="app">
       <div className="main">
        <div className="bg"> 
          <h2> {advice} </h2>
          <button class="glow-on-hover" type="button" onClick={handleAdvice}>HOVER ME, THEN GET ADVICE!</button>
        </div>
      </div> 
     
         <Email />
       </div>     
   ) 
 };
 
 export default App;
    