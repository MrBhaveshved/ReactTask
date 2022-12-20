import React, { Component } from 'react'

export default class state extends Component {
    constructor(props){
        super(props);
        this.state={
            author:"chetan Bhagat",
            book:"threeidiots"
        }
    }
    changdata=()=>{ 
        this.setState({author:"chetan patel",book:"whatever"});
        console.log("btn called");
    }
  render() {
    return (
      <>
      <div className="container">
        <div className="row mt-5">
            <div className="col">
                {this.state.author} 
                {this.state.book} 
                <button onClick={this.changdata}>click me</button>
                {this.state.book}
            </div>
        </div>
      </div>
      </>
    )
  }
}
