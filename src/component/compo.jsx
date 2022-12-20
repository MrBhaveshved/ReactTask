import React, { Component } from 'react'
import Reausablecompo from './Reausablecompo'
export default class compo extends Component {
  render() {
    return (
      <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <Reausablecompo imgSrc="img/iphone.png" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3">
                <Reausablecompo imgSrc="img/iphone14.jpeg" title="IPHONE 14 PRO MAX" oldprice="138000" newprice="99000"/>
                    {/* <div className="card">
                        <img src="img/mi.jpg" alt="" className='card-img-top' />
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title">MI</h5>
                                </div>
                                <div className="col">
                                    <p>Old price $<del>45000</del></p>
                                    <p>New price $39000</p>
                                </div>
                                <center><button className='btn btn-primary'>Addtocart</button></center>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-3">
                    <Reausablecompo imgSrc="img/oneplus.jpeg" title="ONEPLUS" oldprice="75000" newprice="67000"/>
                    {/* <div className="card">
                        <img src="img/oneplus.jpeg" alt="" className='card-img-top' />
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title">ONEPLUS</h5>
                                </div>
                                <div className="col">
                                    <p>Old price $<del>75000</del></p>
                                    <p>New price $67000</p>
                                </div>
                                <center><button className='btn btn-primary'>Addtocart</button></center>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-3"> 
                    <Reausablecompo imgSrc="img/vivo.jpeg" title="VIVO" oldprice="56000" newprice="49000"/>
                    {/* <div className="card">
                        <img src="img/vivo.jpeg" alt="" className='card-img-top' />
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title">VIVO</h5>
                                </div>
                                <div className="col">
                                    <p>Old price $<del>56000</del></p>
                                    <p>New price $49000</p>
                                </div>
                                <center><button className='btn btn-primary'>Addtocart</button></center>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/iphone.png" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/iphone.png" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/iphone.png" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/iphone.png" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/iphone.png" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/vivo.jpeg" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/iphone.png" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/oneplus.jpeg" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/vivo.jpeg" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/iphone.png" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/iphone.png" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
                <div className="col-3 mt-3">
                    <Reausablecompo imgSrc="img/oneplus.jpeg" title="Apple" oldprice="96000" newprice="90000"/>
                </div>
            </div>
        </div>
      </>
    )
  }
}
