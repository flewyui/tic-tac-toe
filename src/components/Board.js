import React from 'react';
import '../style.css';
import Square from './Square';

const Board = (props) => {
    const renderSquare = (i) => {
        return (
            <Square onClick={() => props.onClick(i)} value={props.squares[i]} />
        );
    };

    const resultClass = props.winner && 'result';

    return (
        <div className='wrapper'>
            <h1 className='game_title'>三目並べ</h1>
            <div className='winner'>
                <h1 className={resultClass}>
                    {props.winner
                        ? props.winner
                        : props.nextPlayer + ' の番です'}
                </h1>
            </div>
            <div className='board'>
                <div className='board_row'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board_row'>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board_row'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    );
};

export default Board;
