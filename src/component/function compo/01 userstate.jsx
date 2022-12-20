import React, { useState } from 'react'

export default function  Functionuserstate() {
    const[username,setusername]=useState("someone bhagat")
    const[vara,setvara]=useState(0);
    const[varb,setbarb]=useState(0);

    function changdata()
    {
        console.log("btn called");
        setvara(10);
        setbarb(20);
    }
  return (
    <>
    <div className="conrtainer">
        <div className="row">
            <div className="col">
                {username}
                <br />
                <button onClick={()=>{setusername("chetan bhagat")}}>click me to change value</button>
                <br />
                {vara+varb}
                <br />
                <button onClick={changdata}>chnage data</button>
            </div>
        </div>
    </div>
    </>
  )
}
