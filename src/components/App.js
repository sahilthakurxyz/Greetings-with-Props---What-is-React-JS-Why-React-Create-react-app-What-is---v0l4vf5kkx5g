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
    <div>
      <Welcome name = {"Sahil"} />
    </div>
  );
}
export default App;
