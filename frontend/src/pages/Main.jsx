import React from 'react'

import Stonk from '../assets/stonk.png'
import '../index.css';

const Main = () => {
    return (
            <div className="d-flex flex-column align-items-center justify-content-center main-content">
                <div className="main-title">
                    <h1 className= "title" style={{color:"#05FF00"}}>Bull</h1>
                    <h1 className= "title" style={{color:"#000000"}}>or</h1>
                    <h1 className= "title" style={{color:"#FF0000"}}>Bear</h1>
                </div>
                <p className="text-light" style={{fontSize:"32px"}}>Which stock is higher in value?</p>
                <button className="btn bg-transparent text-black" style={{fontSize:"32px", textShadow: "-5px 0 white, 0 5px white, 5px 0 white, 0 -5px white"}}>Play</button>
            </div>
    )
}

export default Main
