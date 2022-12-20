import React, { useEffect } from 'react'
import { useState } from 'react'
import "./style.css"

export default function Digitalclock() {
    const[time, setTime]=useState('')
    function formatTime(val){
        if(val<10){
            return'0'
        }else{
            return'';
        }
    }
    useEffect(()=>{
        const timerID = setInterval(
            ()=> tick(), 1000
        )
        return function cleanup(){
            clearInterval(timerID)
        }
    })
    function tick(){
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();
        setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) +s);
    }
  return (
    <>
    <div className="container">
        <div className="clock">
            <div className="screen">
                <h1 className='time'>{time}</h1>
            </div>
        </div>
    </div>
    </>
  )
}
