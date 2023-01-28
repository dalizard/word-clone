import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, addGuess] = React.useState([{ id: Math.random(), guess: '' }])
  return (
    <>
      <div className="guess-results">
        {guesses.map(({ id, guess }) =>
          <p key={id} className="guess">{guess}</p>
        )}
      </div>
      <GuessInput guesses={guesses} addGuess={addGuess} />
    </>
  )
}

export default Game;
