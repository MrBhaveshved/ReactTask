import React from "react";
import Home from "./home";
import About from "../component/about/about";
import Loops from "./loops";
import Compo from "./compo";
import State from "./state";
import Task from "./task";
import Lifecycle from "./lifecycle";
import API from "./API";
import FetchAPI from "./09FetchAPI";
import ButtonClick from "./ButtonClick";
import Userstate from "./function compo/01 userstate";
import Function_task from "./function compo/function";
import Usefect from "./function compo/02usefect";
import Quantity_compo from "./Quantity_compo";
import Digitalclock from "./function compo/digitalclock";
import Useref from "./function compo/03useref";
import FunctionApi from "./function compo/functionApi";
import Stopwatch from "./function compo/stopwatch";
import Usereducer from "./function compo/usereducer";
import Usecontex from "./function compo/Usecontex";
import Functionapi_task from "./function compo/Functionapi_task";
import Usedebugvalue from "./function compo/Usedebugvalue";
import Imprativehndl from "./function compo/imprativehndl"
// import Usereducer from './function compo/usereduce';
// import Usecontex from './function compo/usecontex';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function header() {
  const Number = {
    "/home": "Home",
    "/about": "About",
    "./compo": "Compo",
    "/state": "State",
    "/task": "Task",
    "/lifecycle": "Lifecycle",
    "./api": "API",
    "./fetchapi": "FetchAPI",
    "./buttonclick": "ButtonClick",
    "./userstate": "Userstate",
    "./function_tsk": "Function",
    "./usefect": "Usefect",
    "./quantity_compo": "Quantity_compo",
    "./digitalclock": "Digitalclock",
    "./useref": "Useref",
    "./functionapi": "FunctionApi",
    "./stopwatch": "Stopwatch",
    "./usereducer": "Usereducer",
    "./usecontex": "Usecontex",
    "./functionapi_task": "Functionapi_task",
    "./usedebugvalue":"Usedebugvalue",
    "./imprativehndl":"Imprativehndl"
  };
  const returndata = Object.entries(Number).map((res, i) => {
    return (
      <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>
          {res[1]}
        </Link>
      </li>
    );
  });
  return (
    <>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">{returndata}</ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/loops" element={<Loops></Loops>}></Route>
          <Route path="/compo" element={<Compo></Compo>}></Route>
          <Route path="/state" element={<State></State>}></Route>
          <Route path="/task" element={<Task></Task>}></Route>
          <Route path="/lifecycle" element={<Lifecycle></Lifecycle>}></Route>
          <Route path="/api" element={<API></API>}></Route>
          <Route path="/fetchapi" element={<FetchAPI></FetchAPI>}></Route>
          <Route
            path="/buttonclick"
            element={<ButtonClick></ButtonClick>}
          ></Route>
          <Route path="/userstate" element={<Userstate></Userstate>}></Route>
          <Route
            path="/function_tsk"
            element={<Function_task></Function_task>}
          ></Route>
          <Route path="/usefect" element={<Usefect></Usefect>}></Route>
          <Route
            path="/quantity_compo"
            element={<Quantity_compo></Quantity_compo>}
          ></Route>
          <Route
            path="/digitalclock"
            element={<Digitalclock></Digitalclock>}
          ></Route>
          <Route path="/useref" element={<Useref></Useref>}></Route>
          <Route
            path="/functionapi"
            element={<FunctionApi></FunctionApi>}
          ></Route>
          <Route path="/stopwatch" element={<Stopwatch></Stopwatch>}></Route>
          <Route path="/usereducer" element={<Usereducer></Usereducer>}></Route>
          <Route path="/usecontex" element={<Usecontex></Usecontex>}></Route>
          <Route
            path="/functionapi_task"
            element={<Functionapi_task></Functionapi_task>}
          ></Route>
          <Route path='/usedebugvalue' element={<Usedebugvalue></Usedebugvalue>}></Route>
          <Route path='/imprativehndl' element={<Imprativehndl></Imprativehndl>}></Route>

          {/* <Route path='/usecontext' element={<Usecontex></Usecontex>}></Route> */}
        </Routes>
      </Router>
    </>
  );
}
