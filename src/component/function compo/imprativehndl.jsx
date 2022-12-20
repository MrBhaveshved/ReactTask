import React, { useRef,useImperativeHandle } from 'react'
import { forwardRef } from 'react';

function Imprativehndl(props,ref) {
    const inpref = useRef();
    useImperativeHandle(ref,()=>({
        focus:()=>{
            inpref.current.focus();
        }
    })
     
    )
    function checkdata(){
        console.log(inpref.current.value);
    }
  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <input type="text" ref={inpref} />
                <input type="button" value="check ref" onClick={checkdata}/>
            </div>
        </div>
    </div>
    
    </>
  )
}
Imprativehndl = forwardRef(Imprativehndl);
export default Imprativehndl;
