import './TicTacToe.css'
import {useState} from "react";

function Square({value, onSquaresClick}) {
    return <button className="square" onClick={onSquaresClick}>{value}</button>;
}

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X":"O")


    return <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquaresClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquaresClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquaresClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquaresClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquaresClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquaresClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquaresClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquaresClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquaresClick={() => handleClick(8)}/>
        </div>
    </>;
}