import React from 'react';
import Board from './Board';
import { useState } from 'react';

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([]);

    const squareClick = (i) => {
        if (squares[i] !== null || winner) return;
        setXIsNext(!xIsNext);
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? '×' : '○';
        setSquares(newSquares)
        setHistory(history.concat([newSquares]))
    }

    const restart = () => {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
        setHistory([])
    }

    const jumpTo = (index) => {
        setSquares(history[index])
        history.splice(index + 1)
        history.length % 2 === 0 ? setXIsNext(true) : setXIsNext(false)
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a] + ' の勝ち'
            }
        }
        const draw = squares.filter(ele => ele)
        if (draw.length === 9) return '引き分けだ。'
        return null;
    }

    const winner = calculateWinner(squares);

    return (
        <div className="container">
            <Board
                onClick={(i) => squareClick(i)}
                squares={squares}
                winner={winner}
                nextPlayer={xIsNext ? 'x' : '○'}
            />
            <div className="history_area">
                <h1>ヒストリー</h1>
                <p><button onClick={() => restart()}>スタートに戻る</button></p>
                {history.map((ele, index) => {
                    return (
                        <p key={index}><button onClick={() => jumpTo(index)}>{index + 1}手目に戻る</button></p>
                    )
                })}
            </div>
        </div>

    )
}

export default Game;