import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{

  }

  const toggleMode =()=>{
    if (mode==="light"){
      setMode("dark")
    }
    else{
      setMode("light")

    }
  }

  return (
    <>
    <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert/>
    <div className="container my-3">
    <TextForm heading ="Enter the text below to Analyze" mode={mode}/>
    {/* <About/> */}

    </div>
   
    </>
   
  );
}

export default App;
