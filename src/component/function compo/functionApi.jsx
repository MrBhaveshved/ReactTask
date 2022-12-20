import React, { useEffect, useLayoutEffect, useState } from 'react';

function  FunctionApi(props) {
    const [data,setdata]=useState({});
    const [loader,setloader]=useState("Pending...");
    useLayoutEffect(()=>{
        setTimeout(() => {
            setloader("Data Found")
        }, 3000);
    })
    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(Response=>{
                console.log(Response);
                setdata(Response);
            }).catch((Error=>{
                console.log(Error);
            })) 
        }, 2000);
    })
    return (
       <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {loader}
                        {Object.entries(data).map(function(item,i){
                            return <li key={i}>{item[1].title}</li>
                        })}

                    </div>
                </div>
            </div>
       </>
    );
}

export default  FunctionApi;