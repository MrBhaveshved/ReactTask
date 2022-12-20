import React, { useState } from 'react'
export default function Task() {
  const[count,setcount] = useState("0");
  const increase = () =>{
    setcount(count + 1)
  }
  return (
    <>
      <div className="container">
          <div className="row">
            <div className="col">
              <h1>This Function Click {count} Times</h1>
              <button onClick={increase}>Click me</button>
            </div>
          </div>
        </div>   
    </>
  )
}
