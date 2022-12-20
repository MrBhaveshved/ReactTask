import React, { Component } from "react";

export default class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      total: "",
    };
  }

  handlenum1 = (event) => {
    this.setState({
      num1: event.target.value,
    });
  };

  handlenum2 = (event) => {
    this.setState({
      num2: event.target.value,
    });
  };
  exe = (event) => {
    this.setState({
      total: parseInt(this.state.num1) * parseInt(this.props.price),
    });
    event.prevent.default();
  };
  render() {
    return (
      <>
        <div className="container text-center ">
          <h1>Wish List</h1>
        </div>
        <div className="container mt-5">
          <form onBlur={this.exe}>
            <table className="table table-light table-hover table-bordered">
              <thead>
                <tr className="text-center">
                  <th scope="col">Photo</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price per Unit</th>
                  <th scope="col">Price(sub total)</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>
                    <img
                      src={this.props.imgsrc}
                      alt=""
                      className="h-25 w-25"
                      scope="col"
                    />
                  </td>
                  <td>
                    <center>
                      <input
                        type="Numbers"
                        value={this.state.num1}
                        onChange={this.handlenum1}
                      />
                    </center>
                  </td>
                  <td>
                    <h6 onChange={this.handlenum2}>{this.props.price}</h6>
                  </td>
                  <td>
                    <h6>{this.state.total}$</h6>
                  </td>
                  <td>
                    <center>
                      <button className="btn btn-danger">Remove</button>
                    </center>
                  </td>
                </tr>
                {/* <tr className='text-center'>
                                <td><img src={this.props.imgsrc} alt="" className='h-25 w-25' scope='col'/></td>
                                <td><center><input type="text" value={this.state.num1} onChange={this.handlenum1}/></center></td>
                                <td><h6 onChange={this.handlenum2}>$12.99</h6></td>
                                <td><h6>{this.state.total}$</h6></td>
                                <td><center><button className='btn btn-danger'>Remove</button></center></td>
                            </tr> */}
              </tbody>
            </table>
          </form>
        </div>
      </>
    );
  }
}
