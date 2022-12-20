import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FetchAPI extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state={
            fetchdata:'',
            status:'pending ..',
        }
    }
    componentDidMount() {
        setTimeout(() => {
        console.log("componentDidMount called");
        fetch('https://jsonplaceholder.typicode.com/posts').then((re)=>re.json())
        .then((resp)=>{
            console.log(resp);
            this.setState({fetchdata:resp})
            this.setState({status:'success'})
        }).catch((Errorhndl)=>{
            console.log(Errorhndl);
        })
    }, 1000);
    }
    render() {
        console.log("render called");
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {this.state.status}
                            {this.state.status=='success'?<div>{JSON.stringify(this.state.fetchdata)}</div>:'No Data Found'}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default FetchAPI;