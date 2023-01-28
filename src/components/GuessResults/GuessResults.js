import React from "react";
import Guess from '../Guess'

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, value }) =>
        <p key={id} className="guess">
          <Guess value={value} answer={answer} />
        </p>
      )}
    </div>
  )
}

export default GuessResults;
