import React, { Component } from "react";
import "./about.css";
export default class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      punjabispecial: "PUNJABI DISHES",
      chinese: "CHINESE",
    };
  }
  changedata = () => {
    this.setState({ punjabispecial: ",,,,,,,,,,," });
    console.log("data recived");
  };
  mydata = () => {
    this.setState({
      chinese:
        ",,,,,,,",
    });
  };
  render() {
    return (
      <>
      <div className="container">
        <center>
        <h1>WELCOME TO GRAND BHAGVATI MENU </h1>
        </center>
        <div className="container-img">
        
          <div className="row">
            <img src="img/hote.jpg" alt="" srcSet="" />
            <h3>PUNJABI SPECIAL</h3>
            <button
            onClick={this.changedata}
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="true"
              aria-controls="collapseExample"
            >
              VIEW MORE
            </button>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <ul className="list-item">
                  <li>PANEER TUFAN MASALA{this.state.punjabispecial}</li>
                  <span>RS100</span>
                  <li>PANEER BUTTER MASALA</li>
                  <span>RS100</span>
                  <li>PANEER ANGARA</li>
                  <span>RS100</span>
                  <li>PANEER TIKKA</li>
                  <span>RS100</span>
                  <li>PANEER SPECIAL</li>
                  <span>RS100</span>
                  <li>PANEER HANDI</li>
                  <span>RS100</span>
                </ul>
              </div>
              <ul className="list-item">
                <h3>CHINESE</h3>
                <button onClick={this.mydata} className="btn btn.sucess fw-fold">
                  VIEW MORE
                </button>
                <li>{this.state.chinese}</li>
                <span></span>
                <li>NOODLES</li><span>RS100</span>
                <li>MANCHURIAN</li><span>RS100</span>
                <li>MANCHURIAN WITH NOODLES</li><span>RS100</span> 
                <li>MACHURIAN WITH RICE</li><span>RS100</span>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
