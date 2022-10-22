import { useState } from "react";

const Lose = () => {
    const [finalScore, setFinalScore] = useState('0');
    return ( 
        <div>
            <h1>You Lose!<br/>Final Score: { finalScore }</h1>
            <button>Play again!</button>
        </div>
     );
}
 
export default Lose;