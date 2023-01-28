import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessInput({ guesses, setGuesses, setBanner, banner, answer }) {
  const [value, setValue] = React.useState('')
  const [disabled, setDisabled] = React.useState(false)

  const submitForm = (event) => {
    event.preventDefault()
    setValue('')

    const currentGuess = guesses.find(guess => guess.value === null)
    const guessAttempt = guesses.indexOf(currentGuess) + 1

    currentGuess.value = value

    if (guessAttempt == NUM_OF_GUESSES_ALLOWED) {
      setDisabled(true)
      setBanner({...banner, show: true})
    }

    if (value === answer) {
      setDisabled(true)
      setBanner({show: true, hasWon: true, guessesCount: guessAttempt })
    }

    setGuesses([...guesses])
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
        disabled={disabled}
        onChange={(event) =>
          setValue(event.target.value.toUpperCase())} />
    </form>
  )
}

export default GuessInput;
