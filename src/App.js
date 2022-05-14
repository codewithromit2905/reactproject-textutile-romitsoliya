

import './App.css';
import Textform from './component/Textform';
// import About from './component/About';
import Navbar from './Navbar';
import React,{useState} from 'react'
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";







function App() {
  const [mode, setMode] = useState('light')
  const [alert,setalert] = useState(null)

  const showAlert=(message,type )=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
      
    }, 1500);

  }
  
  const togglemode=(cls)=>{
    console.log(cls)
    document.body.classList.add('bg-'+ cls)
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("  Dark mode has been enabled","sucess")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("  light mode has been enabled","sucess")


    }
  }
           
return (
    <>
  
    <Navbar mode={mode} togglemode={togglemode}  />
    <Alert  alert={alert}/>
    <div className="container mx-3" >
    
    <Textform heading= "Word counter and covert your character into upper or lower case" mode={mode} showAlert={showAlert} />
    </div>
    kwm che 
     
    
   {/* <About></About> */}


    </>

  );
}

export default App;
