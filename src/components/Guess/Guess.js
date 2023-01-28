import React from "react";
import { checkGuess } from "../../game-helpers"
import { range } from '../../utils';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer) || range(0,5)

  return (
    result.map(({letter, status}, index) =>
      <span key={index} className={`cell ${status}`}>{letter}</span>
    )
  )
}

export default Guess;
