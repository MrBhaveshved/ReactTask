import React from 'react'
import { useState } from 'react'

 function Usedebugvalue() {
    const[massage,setmassage]=useState("")

    React.useDebugValue(massage,massage=>massage?"massage set":"massage not sent");
    return massage;
}
function App()
{
    const delaymassage=("hello");

  return (
    <>
    <div className="container">
        <div className="row">'
        {delaymassage}
        </div>
    </div>
    </>
  )
}
export default App;