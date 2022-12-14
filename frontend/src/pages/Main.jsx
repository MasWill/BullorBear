import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/main.css';

const Main = () => {
    const navigate = useNavigate();
    
    return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center main">
            <div className="d-inline-block mx-1">
                <h1 className="title mx-3 bull">Bull </h1>
                <h1 className="title mx-3 text-black">or </h1>
                <h1 className="title mx-3 bear">Bear</h1>
            </div>
            <p className="mx-1 pt-3 text-white fs-2">Which stock is higher in value?</p>
            <button className="btn bg-transparent fs-1 text-black main-btn" onClick={() => navigate('/Playing')}>Play</button>
        </div>
    )
}

export default Main;
