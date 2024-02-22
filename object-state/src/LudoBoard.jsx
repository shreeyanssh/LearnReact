import { useState } from "react"
export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, green: 0, yellow: 0, red: 0})

    let setBlue = () => {
        setMoves((prevMove) => {
            return {...prevMove, blue: prevMove.blue + 1}
        });
    };

    let setGreen = () => {
        setMoves((prevMove) => {
            return {...prevMove, green: prevMove.green + 1}
        });
    };

    let setYellow = () => {
        setMoves((prevMove) => {
            return {...prevMove, yellow: prevMove.yellow + 1}
        });
    };

    let setRed = () => {
        setMoves((prevMove) => {
            return {...prevMove, red: prevMove.red + 1}
        });
    };

    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{background: "blue"}} onClick={setBlue}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{background: "green"}} onClick={setGreen}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{background: "yellow", color: "black"}} onClick={setYellow}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{background: "red"}} onClick={setRed}>+1</button>
            </div>
        </div>
    )
}