import React from "react";

function GuessInput({ guesses, addGuess, setBanner, banner, answer }) {
  const [value, setValue] = React.useState('')

  const submitForm = (event) => {
    event.preventDefault()
    setValue('')
    const idx = guesses.findIndex(guess => guess.guess === null)

    if (idx === -1) return

    const newGuesses = [...guesses]
    newGuesses[idx] = { id: Math.random(), guess: value }

    if (value === answer) {
      const guessesCount = newGuesses.filter(guess => guess.guess !== null).length
      setBanner({show: true, hasWon: true, guessesCount })
    }

    addGuess(newGuesses)

    if (!newGuesses.find(guess => guess.guess === null)) {
      setBanner({...banner, show: true})
    }
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
