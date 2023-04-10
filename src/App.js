import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
      document.body.style.color="white";
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }
  return (
    <>
      <div className="container">
        <Navbar title="Text Utils" about="About Text Utils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Textform heading="Enter the text to analyse" mode={mode}></Textform>
        <About mode={mode}></About>
      </div>
    </>
  );
}

export default App;