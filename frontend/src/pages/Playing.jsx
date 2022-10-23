import { React, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// API URL
const URL = "http://localhost:4000/";
// const pageState = ["main", "playing", "lose"];

const Playing = () => {
  /*
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [left, setLeft] = useState({}); // hold left stock info
  const [right, setRight] = useState({}); // right stotck info
  const [isDone, setIsDone] = useState(false); // is done loading

  const getStonk = async (req, res) => {
    const response = await fetch(URL + "stonk");
    const json = response.json();
    setRight(json);
  };

  // function gameLoop() {}

  useEffect(() => {
    // // Get a new stock
    // const getStonk = async (req, res) => {
    //   const response = await fetch(URL + "stonk");
    //   const json = response.json();
    //   setRight(json);
    // };

    // Get new stock for both sides
    if (score === 0) {
      getStonk();
      setLeft(right);
      getStonk();
    } else {
      setLeft(right);
      getStonk();
    }
    setIsDone(true);
  }, [score, right]);

  function guess(selection) {
    // Incorrect guess
    if (
      (guess === 1 && parseFloat(left["price"]) > parseFloat(right["price"])) ||
      (guess === -1 && parseFloat(left["price"]) < parseFloat(right["price"]))
    ) {
      // Redirect to lose screen
      navigate(`Lose/{score}`);
    } else {
      setScore(score + 1);
    }
  }
  */

  return (
    <div>
        <div className="playing-content">
          <h1
            className="d-flex align-items-center justify-content-center playing-center"
            style={{ fontSize: "80px" }}
          >
            VS
          </h1>
          <div className="row">
            {/* Left */}
            <div className="playing-bg mt-7">
              <p className="stonk text-dark" style={{ fontSize: "32px" }}>BLK</p>
              <p className="text-dark" style={{ fontSize: "32px" }}>529.97</p>
            </div>
            {/* Right */}
            <div className="d-flex playing-bg-2 flex-column">
              <p className="stonk text-dark" style={{ fontSize: "32px" }}>WMT</p>
              <p className="text-dark" style={{ fontSize: "32px" }}> 199.78</p>
              <Link to='/Lose/69'>
              <button
                className="btn btn-higher bg-success text-light"
                style={{ fontSize: "32px" }}>
                Higher
              </button>
              </Link>
              <Link to='/Lose/69'>
              <button
                className="btn bg-danger text-light mt-4"
                style={{ fontSize: "32px" }}>
                Lower
              </button>
              </Link>
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default Playing;
