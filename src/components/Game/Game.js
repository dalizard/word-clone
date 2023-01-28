import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import Banner from '../Banner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map(() => ({ id: Math.random(), value: null}))
  )

  const [banner, setBanner] = React.useState({hasWon: false, show: false, guessesCount: 0})

  return (
    <>
      {banner.show && <Banner banner={banner} answer={answer} />}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput guesses={guesses} setGuesses={setGuesses} setBanner={setBanner} banner={banner} answer={answer} />
    </>
  )
}

export default Game;
