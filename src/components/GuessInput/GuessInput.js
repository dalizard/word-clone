import React from "react";

function GuessInput({ guesses, setGuesses, setBanner, banner, answer }) {
  const [value, setValue] = React.useState('')
  const [disabled, setDisabled] = React.useState(false)

  const submitForm = (event) => {
    event.preventDefault()
    setValue('')

    const idx = guesses.findIndex(guess => guess.value === null)

    const newGuesses = [...guesses]
    newGuesses[idx] = { id: Math.random(), value: value}

    if (value === answer) {
      const guessesCount = newGuesses.filter(guess => guess.value !== null).length
      setDisabled(true)
      setBanner({show: true, hasWon: true, guessesCount })
    }

    if (!newGuesses.find(guess => guess.value === null)) {
      setDisabled(true)
      setBanner({...banner, show: true})
    }

    setGuesses(newGuesses)
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
