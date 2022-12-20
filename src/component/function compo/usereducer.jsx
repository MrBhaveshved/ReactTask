import React, { useReducer } from 'react';

const IntialData = {count:0}
function reducer (state,action)
{
    switch (action.type) {
        case 'Increment':
            return{count:state.count+1}
        
        case 'Decrement':
            return{count:state.count-1}

        case 'Reset':
            return{count:state.count=0}
    
        default:
            throw new Error();
    }
}
function  Usereducer(props) {
    const[state,dispatch] = useReducer(reducer,IntialData)
    return (
      <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <button className='btn btn-danger' onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
                        <h2>{state.count}</h2>
                        <button className='btn btn-primary' onClick={()=>dispatch({type:'Increment'})}>Increment</button>
                        <br />
                        <button className='btn btn-info' onClick={()=>dispatch({type:'Reset'})}>Reset</button>
                    </div>
                </div>
            </div>
      </>
    );
}

export default  Usereducer;