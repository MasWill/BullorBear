import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:4000/";
// const pageState = ["main", "playing", "lose"];

const Playing = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [left, setLeft] = useState(null); // hold left stock info
  const [right, setRight] = useState(null); // right stotck info

  function startGame() {
    setScore(0);
  }

  useEffect(([score, right]) => {

    // Get a new stock
    const getStonk = async (req, res) => {
      const response = await fetch(URL + "/stonk");
      const json = response.json();
      setRight(json);
    };

    // Get new stock for both sides
    if (score === 0) {
      getStonk();
      setLeft(right);
      getStonk();  
    } else {
      setLeft(right);
      getStonk();
    }
  });

  function guess(selection) {
    // Incorrect guess
    if (
      (guess === 1 && parseFloat(left["price"]) > parseFloat(right["price"])) ||
      (guess === -1 && parseFloat(left["price"]) < parseFloat(right["price"]))
    ) {
      // Redirect to lose screen
      navigate(`/Lose/{score}`);
    } else {
      setScore(score + 1);
    }
  }

  return (
    <div className="playing-content">
      <h1
        className="d-flex align-items-center justify-content-center playing-center"
        style={{ fontSize: "80px" }}
      >
        VS
      </h1>
      <div className="row">
        {/* Left */}
        <div className="playing-bg">
          <p className="text-light" style={{ fontSize: "32px" }}>
            {left["tick"]}
          </p>
          <p className="text-light" style={{ fontSize: "32px" }}>
            {left["price"]}
          </p>
        </div>
        {/* Right */}
        <div className="d-flex playing-bg-2 flex-column">
          <p className="text-light" style={{ fontSize: "32px" }}>
          {right["tick"]};
            
          </p>
          <p>
          {right["price"]};
          </p>
          <button
            className="btn bg-transparent text-black"
            style={{ fontSize: "32px" }}
            onClick={() => {
              guess(1)}}
          >
            Higher
          </button>
          <button
            className="btn bg-transparent text-black"
            style={{ fontSize: "32px" }}
            onClick={() => {
                guess(-1)}}
          >
            Lower
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playing;