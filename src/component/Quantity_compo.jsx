import React, { Component } from 'react'
import Quantity from './Quantity'

export default class Quantity_compo extends Component {
  render() {
    return (
     <>
        <div className="container">
            <div className="row">
                <div className="col">
                   <center><h1>Mobile Shopping</h1></center>
                </div>
            </div>
            <Quantity imgsrc="img/icon.gif" price="100$" total="$"></Quantity>
            <Quantity imgsrc="img/icon.gif" price="199$" total="$"></Quantity>
            <Quantity imgsrc="img/icon.gif" price="200$" total="$"></Quantity>
            <Quantity imgsrc="img/icon.gif" price="198.99$" total="$"></Quantity>
            <Quantity imgsrc="img/icon.gif" price="149.58$" total="$"></Quantity>
        </div>
     </>
    )
  }
}
