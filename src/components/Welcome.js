// write code for Welcome component here
import React from "react";
function Welcome(props){
    let name = props.name;
    return(
        <>
            <h1> Hey ! {name}</h1>
        </>
    );
}
export default Welcome;
