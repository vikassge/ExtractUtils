import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); 
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },1000);


  }
  const toggleMode=()=>{
    if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    
    showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }

  }
  return (
   <>
   <Router>
   <Navbar title="TEXTUTILS1" aboutText="About TextUtils" mode={mode}  toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3'>
   <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
  
          <Route exact path="/">
            <Textform  showAlert={showAlert} heading="Enter the text to Analyze Below" mode={mode}/>
          </Route>
        </Switch>
  
   </div>
   </Router>
   

  
   </> 
   



  );
}

export default App;
