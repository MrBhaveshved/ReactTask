import React from 'react'
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

export default function DemoEffect(props) {

    let a =80;
    let b =50;
    const[vara,setvara]=useState(0);
    const[Username,setusername]=useState("Tops");

    useLayoutEffect(()=>{
        setTimeout(() => {
            console.log("useLayoutEffect called");
        }, 2000);
    })

    useEffect(()=>{
        console.log("use effect called");
    },[vara,Username])

    function chngData(){
        console.log("btn called");
        setvara(50);
        setusername("Tops Technologies");
    }

    const[count,setcount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            console.log("counter useeffect called");
            console.log(document.title = `you have clicked ${count} time`);
        }, 2000);
    })
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-3">
                {a+b}
                <br />
                {vara}
                <br />
                {Username}
                <br />
                <button onClick={chngData}>click me</button>
                <br />
                {count}
                <br />
                <button onClick={()=>{setcount(count+1)}}>clickme</button>
            </div>
        </div>
    </div>
    </>
  )
}
