import React, {useState} from 'react';



export default function Textform(props) {
  const handleUpClick =()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upperCase!", "success");
  }
  const handleLowClick =()=>{
    console.log("Lowercase was clicked");
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowerCase!", "success");
  }
  const handleProperClick =()=>{
    console.log("Propercase was clicked");
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to Propercase!", "success");
  }
  
  const clearText=()=>{
    if(text.length===0)
    {
      props.showAlert("There is no text to clear", "danger")
    }
    else{
    setText("");
    props.showAlert("Clear Text", "success")}
  }
  const copyText=()=>{

    if(text.length===0)
    {
      props.showAlert("There is no text to copy", "danger")
    }
    else{
    let text=document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to clipboard", "success")}
   }
   const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const [text,setText]=useState('Enter text Here');
  // // text="newchdvchdvc"; wrong way to change the state
  // setText('jvdvfj');
  return (
      <>
     
      <div className='container my-3' style={{color:props.mode==='dark'?'grey':'black'}}>
    
    <h1>{props.heading}</h1>
    <div className="ab-3">
    {/* <label for="myBox" className="form-label"></label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'grey',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Convert To UpperCase</button>
    <button className='btn btn-primary my-3 mx-2' onClick={handleLowClick}>Convert To LowerCase</button>
    <button className='btn btn-primary my-3 mx-2' onClick={handleProperClick}>Convert To ProperCase</button>
    <button className='btn btn-primary my-3 mx-2' onClick={clearText}>Clear Text</button>
    <button className='btn btn-primary my-3 mx-2' onClick={copyText}>Copy Text</button>
   
    
   
     </div>
    
     <div className='container my-2' style={{color:props.mode==='dark'?'grey':'black'}}>
       <h2>Your Text Summary</h2>
       <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
       <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}) .length} Minutes Read</p>
       <h3>Preview</h3>
       <p>{text.length>0?text:"Enter something to preview it here"}</p>
     </div>
 

    
       
  
      </>
  )
}
