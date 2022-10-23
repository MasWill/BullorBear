import { useParams } from "react-router-dom";

const Lose = () => {
    const { score } = useParams();
    return (
        <div>
            <h1>You Lose! <br />  Final Score: { score }</h1>
            <button>Play again!</button>
        </div>
     );
}
 
export default Lose;