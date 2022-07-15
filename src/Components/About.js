import React,{useState} from 'react';




export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color:'white',
    //         backgroundColor:'black'
    // })
    // const [btntext, setBtnText] = useState('Enable Dark Mode');

//    const toggleStyle=()=>{
//         if(myStyle.color==='White'){
//         setMyStyle({
//             color:'black',
//             backgroundColor:'white'

//         })
//         setBtnText("Enable Light Mode")
//     }else{
//         setMyStyle({
//             color:'white',
//             backgroundColor:'black'

//     })
//     setBtnText("Enable Light Mode");

//     }
// }
let myStyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'rgb(36 74 105)':'white',
  border:'2px solid',
  borderColor:props.mode==='dark'?'white':'#042743'
  
}

  return (
      <>
      <div className="container my-3" style= {myStyle}>

          <h2 className='my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h2>
          <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">

    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body" style= {myStyle}>
        <strong>Extract-Utils is a utility which can be used to manipulate your text in the way you want.</strong> In this app we can easily convert the UpperCase text to lowercase and viceversa.This app also has ablity to count the words when we do type on the textform.In this we can clear or copy the text very fast.Its very helpful and daiy usable app for every sector guy.This app will not charge any fee of using,basically this app is free to use for everyone.EveryOne can enjoy and use  the features of this app.
        <strong>Thank You!</strong>
      </div>
    </div>
  </div>
 
</div>
<div className='container my-3'>
{/* <button type="button" onClick={toggleStyle} className="btn btn-primary">Enable Dark Mode</button> */}
</div>
     


      </div>
  
  </>
  );
}

