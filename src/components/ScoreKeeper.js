import React, { useState } from 'react';
import './ScoreKeeper.css';

const ScoreKeeper = () => {

  // if state is declared using const, wil throw 'Assignment to constant variable' error
  let [ p1Score, setP1Score ] = useState(0);
  let [ p2Score, setP2Score ] = useState(0);

  let winningScore = 5;

  const p1Handler = () => {
    if (p1Score !== winningScore) {
      setP1Score(p1Score++);
    }
    
  }

  const p2Handler = () => {

    setP2Score(p2Score++);
  }

  const resetHandler = () => {
    alert('reset clicked!')
  }


  return (
    <>
      <h1><span id='p1Score'>{p1Score}</span> to <span id='p2Score'>{p2Score}</span></h1>
      <button id='p1Button' onClick={p1Handler}>+1 Player One</button>
      <button id='p2Button' onClick={p2Handler}>+1 Player Two</button>
      <button id='reset' onClick={resetHandler}>Reset</button>    
    </>
  )
}

export default ScoreKeeper