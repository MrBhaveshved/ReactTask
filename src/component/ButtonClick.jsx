import React, { Component } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

 class Mybtn extends Component {
  render() {
    return (
      <>
      <button onClick={()=>{
        console.log("btn called");
        console.log(this.props);
        // Navigate('/whatever');
      }}>click me</button>
      </>
    )
  }
}

function ButtonClick()
{
    let Navigate = useNavigate();
    return<>
    
        <Mybtn navigatedata={Navigate}/>
    </>
}
export default ButtonClick;