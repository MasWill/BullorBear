import React from "react";
import { useNavigate, useLocation } from "react-router";
import '../styles/lose.css';
 
const Lose = () => {
    const navigate = useNavigate();
    const { score } = useLocation();

    return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center lose">
            <h1 className="final-score text-black">Final Score: </h1>
            <span className="my-2 score">{score}</span>
            <p className="mx-1 pt-3 pb-1 text-black">You're garbage. Get better.</p>
            <div className="mt-1 d-inline-block">
                <button className="lose-btn" onClick={() => navigate('/')}>Back to Menu</button>
                <button className="lose-btn" onClick={() => navigate('/playing')}>Play Again</button>
            </div>
         </div>
    )
}

export default Lose;