import './TicTacToe.css'
import {useState} from "react";

function Square({value, onSquaresClick}) {
    return <button className="square" onClick={onSquaresClick}>{value}</button>;
}

function TicTacToe({xIsNext, squares, onPlay}) {

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
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares);
    const status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O")

    function renderSquare(i) {
        return <Square key={i} value={squares[i]} onSquaresClick={() => handleClick(i)}/>
    }

    function renderBoard() {
        const boardSize = 3;
        let boardRows = [];
        for (let j = 0; j < boardSize; j++) {
            let boardColumns = [];
            for (let i = 0; i < boardSize; i++) {
                boardColumns.push(renderSquare(i * boardSize + j))
            }
            boardRows.push(<div key={j} className="board-row">{boardColumns}</div>)
        }
        return <>{boardRows}</>
    }

    return <>
        <div className="status">{status}</div>
        {renderBoard()}
    </>;
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        if (history.length - 1 === move) return (
            <li key={move}>You are at move #{move}</li>
        )
        const description = (move > 0) ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <TicTacToe xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}