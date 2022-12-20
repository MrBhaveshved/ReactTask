import React, { Component } from 'react';
import PropTypes from 'prop-types';

class API extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor called");
        this.state= {
            UserData:'',
            data :'Loading....',
            status : 'Pending'
        }
    }

    componentDidMount() {
        console.log("didMount called");
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((response)=>{
            console.log(response);
            this.setState({UserData:response,status:'Completed'})
        }).catch((ErrorHandl)=>{
            console.log(ErrorHandl);
        })
    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }
    BtnClick=()=>{
        this.setState({
            data : 'Refresh'
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="col">
                        {this.state.status!='Completed'?'Loading....':"will be print"}
                        {/* {this.state.data} */}
                        <button onClick={this.BtnClick}>click</button>
                    </div>
                </div>
            </>
        );
    }
}

export default API;