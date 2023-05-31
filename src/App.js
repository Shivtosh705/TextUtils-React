
import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

const [mode,setMode]=useState('light');//whether dark mode is enabled or not

const [alert,setAlert]=useState(null);

const showAlert = (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },3000)

  
}



const toggleMode= ()=>{
  if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor="#042743";
    showAlert("Dark mode has been enabled","success");
    document.title='TextUtils - Dark Mode';
  }
  else{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled","success");
    document.title='TextUtils - Light Mode';
  }
}


  return (
  <>
   {/* <Navbar title="TextUtils" aboutText="About Textutils"/> */}
   {/* <Router> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="conatianer my-3">


   <TextForm setAlert={setAlert}heading="Enter the text to analyze below" mode={mode}/>
   {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert}/>}/>
   </Routes> */}
        
        </div>
        {/* </Router> */}
   
  

   
  </>
  );
}

export default App;
