import React from 'react'
import Stonk from '../assets/stonk.jpg'
import '../index.css';

const Main = () => {
    return (
        <div className="main-content">
            <div className="bg-image">
                <img src={Stonk} alt="stonk man" />
            </div>
            <div className="main-content">
                {/* TODO: Style the colors for Bull or Bear */}
                <h1 className="main-title">Bull or Bear</h1>
                <p className="main-question">Which stock is higher in value?</p>
                <button className="main-play-button">Play</button>
            </div>
        </div>
    )
}

export default Main
