import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor called");
        this.state={counter:0}

    }

    componentDidMount() {
        setTimeout(() => {
            console.log("componentDidMount called");
        }, 3000);

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        console.log("Next state",nextProps);
        console.log("Nect state",nextState);
        return true;

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log("Prev",prevProps);
        console.log("Prev",prevState);

    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");

    }

    BtnClick=()=>{
        this.setState({counter:this.state.counter+1})
        console.log("Btn called");
    }
  
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{this.state.counter}</h1>
                        <button onClick={this.BtnClick}>click me</button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default lifecycle;