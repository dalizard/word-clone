import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import Banner from '../Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const initialGuesses = range(0,5).map(() => ({ id: Math.random(), guess: null}))

  const [guesses, addGuess] = React.useState(initialGuesses)

  const [banner, setBanner] = React.useState({hasWon: false, show: false, guessesCount: 0})

  return (
    <>
      {banner.show ? <Banner banner={banner} answer={answer} /> : null}
      <GuessResults guesses={guesses} answer={answer}/>
      <GuessInput guesses={guesses} addGuess={addGuess} setBanner={setBanner} banner={banner} answer={answer} />
    </>
  )
}

export default Game;
