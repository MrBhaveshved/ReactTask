import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useContext } from 'react';
const themes = {
    light:{
        fg: 'red',
        bg: 'yellow'
    },
    dark:{
        fg:'white',
        bg:'blue'
    }
}
const Mycontex = React.createContext(themes.light)
function  Functionapi_task(props) {
    const mytheme = useContext(Mycontex)
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
                setdata(Response)

            }).catch((Error=>{
                console.log(Error);
            })) 
        }, 2000);
    })
    const returndata = Object.entries(data).map(function(item,i){
        return(
            <tr key={i}>
                <td>{item[1].userId}</td>
                <td>{item[1].id}</td>
                <td>{item[1].title}</td>
            </tr>
        )
    })
    return (
       <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {loader}
                        {/* {Object.entries(data).map(function(item,i){
                            return <li key={i}>{item[1].title}</li>
                        })} */}

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                        <th scope="col">Userid</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        </tr>
                                    </thead>
                                    <tbody>{returndata}</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
}

export default  Functionapi_task;