import React from 'react';
// import './stopwatch.css'
import { useReducer, useEffect, useRef } from 'react';
const initialState = {
    isRunning: false,
    time: 0
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'start':
        return { ...state, isRunning: true };
      case 'stop':
        return { ...state, isRunning: false };
      case 'reset':
        return { isRunning: false, time: 0 };
        case 'tick':
            return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }
function Stopwatch(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);
  useEffect(() => {
    if (!state.isRunning) { 
      return; 
    }
    idRef.current = setInterval(() => dispatch({type: 'tick'}), 50);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);
    return (
      <div className="container">
        <div>
           <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer"> {("0" + Math.floor((state.time / 60000) % 60)).slice(-2)}: {("0" + Math.floor((state.time / 100) % 60)).slice()}.{("0" + ((state.time / 100) % 100)).slice(-2)}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={() => dispatch({ type: 'start' })}
                disabled=""
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={() => dispatch({ type: 'stop' })}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={() => dispatch({ type: 'reset' })}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>  
        </div>
        </div>
    );
}
export default Stopwatch;