import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [leftTicker, setLeftTicker] = useState('AAPL');   // Stock on left side of screen
  const [rightTicker, setRightTicker] = useState('MSFT'); // Stock on right side of screen
  
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
