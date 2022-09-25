// write code for Welcome component here
import React from "react";
const Welcome = ({props})=>{
   let sayHi = `Hey ${name}!`;
   let greatingMessage = `Welcome to Newton School.` 
    return(
        <>
            <h1>{sayHi}</h1>
  <h2>{greatingMessage}</h2>

        </>
    );
}
export default Welcome;
