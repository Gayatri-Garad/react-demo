import React from "react";
import './Welcome.css';

function Welcome(){ 
const heading1 ={ 
  color:'red'  //inlinestyle;
}
 return (
  <>
  <div className="heading">
  <h1 style={heading1}>Welcome to React</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nemo.</p>
  <input type="name" placeholder="Enter Name"/>
  </div>
  
  </>

  )
}

export default Welcome;