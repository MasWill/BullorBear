import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/playing.css';

const Playing = () => {

  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [left, setLeft] = useState({}); // hold left stock info
  const [right, setRight] = useState({}); // right stotck info

  const getStonk = async () => {
    const res = await fetch("http://localhost:4000/stonk");
    const json = await res.json();
    return json;
  };
 
  useEffect(() => {
    // start of new game
    setScore(0)
    getStonk().then(data => {
      console.log("inital left is: ", data);
      setLeft(data)
    });
    getStonk().then(data => {
      console.log("inital right is: ", data);
      setRight(data)
    });
    // new player
    if (localStorage.getItem("highScore") === null) {
      localStorage.setItem("highScore", 0);
    }
    // old player
    else {
      setHighScore(localStorage.getItem("highScore"));
    }
  }, []);

  function guess(selection) {
    // Incorrect guess
    if (
      (selection === 1 && parseFloat(left["price"]) > parseFloat(right["price"])) ||
      (selection === -1 && parseFloat(left["price"]) < parseFloat(right["price"]))
    ) {
      setLeft(null);
      setRight(null);
      if (score > highScore) {
        sessionStorage.setItem("highScore", score);
      }
      navigate('/lose', {score: score})
    } 
    // Correct guess
    else {
      getStonk().then(data => {
        console.log(data);
        setLeft(right);
        setRight(data);
        setScore(score + 1);
      });
    }
  }

  return (
    <div className="playing">
        <h1 className="play-highscore">High Score: {highScore}</h1>
        <h1 className="play-score">Score: {score}</h1>
        <span className="d-flex circle text-center align-items-center justify-content-center playing-center">VS</span>
        <div className="d-flex w-100"> 
          <div className="playing-bg flex-column">
            <div className="mt-4">
              <p className="stonk">{left.tick}</p>
              <p className="stonk">{left.price}</p>
            </div>
          </div>
          <div className="d-flex playing-bg-2 flex-column align-items-center">
            <div className="mt-4">
              <p className="stonk">{right.tick}</p>
              <p className="stonk">is</p>
            </div>
            <div className="p-btns">
              <button 
                className="btn d-block p-btn bg-success"
                onClick={() => guess(1)}
              >
              Higher</button>
              <button 
                className="btn d-block p-btn bg-danger mt-4"
                onClick={() => guess(-1)}
              >
              Lower</button>
            </div>
          </div>
        </div>
    </div>
 );
};

export default Playing;
