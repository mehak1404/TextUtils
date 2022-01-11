// import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react'
import Alert from "./Components/Alert";

// import Textform from "./Components/Textform";

function App() {
 
  const[Mode, setMode] = useState('light');
  const[alert, setAlert]= useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
  }
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#081b42';
      showAlert("Dark mode unabled", "success");
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode unabled", "success");
    }
  }
  return (
    <>
    <Navbar title = " TextTutils" mode = {Mode} toogleMode = {toggleMode} />
    {/* <div className="container my-3">
      <About/>
    </div> */}
    <div className="container">
      <Alert alert= {alert} />
      <Textform mode = {Mode} />
      </div>
    </>
    
  );
}

export default App;
