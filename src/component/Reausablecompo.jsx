import React, { Component } from 'react'

export default class Reausablecompo extends Component {
  render() {
    return (
        <>
            <div className="card">
                <img src={this.props.imgSrc} alt="" className='card-img-top' />
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title">{this.props.title}</h5>
                        </div>
                        <div className="col">
                            <p>Old price Rs<del>{this.props.oldprice}</del></p>
                            <p>New price Rs{this.props.newprice}</p>
                        </div>
                        <center><button className='btn btn-primary'>Add To Cart</button></center>
                    </div>                  
                </div>
            </div>
        </>
    )
  }
}
