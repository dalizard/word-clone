import React from "react";
import { checkGuess } from "../../game-helpers"
import { range } from '../../utils';

function Letter({ value, status }) {
  return (
    <span className={`cell ${status}`}>{value}</span>
  )
}

function Guess({ value = '', answer }) {
  const result = checkGuess(value, answer) || range(5).map(() => ({ letter: undefined, status: undefined }))

  return (
    result.map((r, index) =>
      <Letter key={index} value={r.letter} status={r.status} />
    )
  )
}

export default Guess;
