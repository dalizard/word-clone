import React from "react";

function GuessInput({ guesses, addGuess }) {
  const [value, setValue] = React.useState('')

  const submitForm = (event) => {
    event.preventDefault()
    addGuess([...guesses].concat([{ id: Math.random(), guess: value}]))
    setValue(value)
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => submitForm(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength="5"
        maxLength="5"
        value={value}
        onChange={(event) =>
          setValue(event.target.value.toUpperCase())} />
    </form>
  )
}

export default GuessInput;
