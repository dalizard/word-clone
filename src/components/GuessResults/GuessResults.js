import React from "react";
import Guess from '../Guess'

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, guess }) =>
        <p key={id} className="guess">
          <Guess guess={guess || '     '} answer={answer} blank={guess} />
        </p>
      )}
    </div>
  )
}

export default GuessResults;
