import React from 'react';
import { useState } from 'react';

function Function_task() {
    const[count,setCount] = useState(1);

    // const incrementCount = ()=>{
    //     setCount(count +1) ;
    //     console.log("btn called");
    // }
    return (
       <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>This Function Click {count} Times</h1>
                        <button onClick={()=>{setCount(count+1)}}>Click me!</button>
                    </div>
                </div>
            </div>
       </>
    );
}
export default Function_task;