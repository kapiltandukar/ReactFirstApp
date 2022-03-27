import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [showAlert, setshowAlert] = useState(null);
  const [color, setColor] = useState("danger");

  const colorSetup = (colorAssign) => {
    setColor({
      colorName: colorAssign
    });
  }

  const alertSetup = (message, type) => {
      setshowAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setshowAlert(null);
      }, 1500);
  }
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "rgb(33,37,41, 0.95)"
      alertSetup(
        "Dark Mode has been enabled", "success"
      )
    } else {
      setMode("light");
      document.body.style.background = "white"
      alertSetup(
        "Light Mode has been enabled", "danger"
      )
    }
  }
  return (
  <>
    {/* <Navbar title="TextUtils" aboutText="About Utils"/> */}
    <Router>
    <Navbar appName="TextUtils" title='Home' aboutText="About us" mode={mode} toggleMode={toggleMode} colorChangeData={colorSetup}/>
   
   <div className='container'>
       <Alert displayAlert={showAlert}/>
   <Routes>
   <Route exact path="/about" element={  <About />}/>
   <Route exact path="/" element= {  
    <TextFrom heading="Enter the text to analyse" mode={mode} alertDisplay={alertSetup} dynamicColor={color} />
    } />
       </Routes>
   </div>
    </Router>
    
  </>
  );
}

export default App;
