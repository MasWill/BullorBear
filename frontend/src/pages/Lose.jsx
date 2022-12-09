import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoseBG from '../assets/lose-bg.png';
import { Link, Router } from "react-router-dom";

const Lose = () => {
    // const { score } = useParams();
    // const [highScore, setHighScore] = useState(0, ()=> {
    //     const local = localStorage.getItem('highScore');
    //     return local ? JSON.parse(local) : 0;
    // });

    // useEffect(() => {
    //     if (score > highScore) {
    //         localStorage.setItem('highScore', JSON.stringify(score));
    //         setHighScore(score);
    //     }
    // })

    return (
        <div>
            <div className="lose-bg">
                <img src={LoseBG} alt="L bozo" />
            </div>
            <div className="lose-info">
                {/* <h1>You Lose! <br />Final Score: {score} <br />High Score: {highScore} </h1> */}
                <h1>You Lose! <br />Final Score:</h1>
                <Link to="/Playing">
                    <button className="lose-btn">Play again!</button>
                </Link>
                <br></br>
                <Link to="/">
                    <button>Main Menu</button>
                </Link>
            </div>
        </div>
    );
}

export default Lose;