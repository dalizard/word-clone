import React from "react";

function GuessInput({ guesses, handleGuess, gameStatus }) {
  const [value, setValue] = React.useState('')
  const [disabled, setDisabled] = React.useState(false)

  const submitForm = (event) => {
    event.preventDefault()
    handleGuess(value.toUpperCase())
    setValue('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitForm}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        value={value}
        disabled={gameStatus !== 'running'}
        onChange={(event) => setValue(event.target.value)} />
    </form>
  )
}

export default GuessInput;
