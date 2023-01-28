import React from "react";

function GuessInput() {
  const [value, setValue] = React.useState({ guess: '' })

  const submitForm = (event) => {
    event.preventDefault()
    console.log(value)
    setValue({guess: ''})
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => submitForm(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength="5"
        maxLength="5"
        value={value.guess}
        onChange={(event) =>
          setValue({ guess: event.target.value.toUpperCase() })} />
    </form>
  )
}

export default GuessInput;
