import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  return (
    <Welcome name="Sahil" />
  )
}

function Welcome(props){
  let name = props.name;
  return(
    <>
    <h1>Hey {name}</h1>
    <h2>
      Welcome to Newton School.
    </h2>
    </>
  );
}
export default App;
