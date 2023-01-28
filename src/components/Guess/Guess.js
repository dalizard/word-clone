import React from "react";
import { checkGuess } from "../../game-helpers"

function Guess({ guess, answer, blank }) {
  const result = checkGuess(guess, answer)

  return (
    result.map(({letter, status}, index) =>
      <span key={index} className={`cell ${blank && status}`}>{letter}</span>
    )
  )
}

export default Guess;
