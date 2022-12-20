import React from 'react'
import { useRef } from 'react';

export default function Useref() {

    const inp = useRef(null);
    console.log(inp);

    const btnclick=()=>{
        inp.current.focus();
        console.log(inp.current.value);
        if(inp.current.value=="")
        {
            alert("please enter data")
        }
    }
  return (
    <>
    <div className="container">
        <div className="row mt-5" >
            <div className="col-3">
                <input type="text" className='form-cantrol' ref={inp} />
                 <button className='btn btn-primary mt-2' onClick={btnclick}>click</button>
            </div>
        </div>
    </div>
    </>
  )
}
