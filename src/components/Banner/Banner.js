import React from "react";

function Banner({ gameStatus, numOfGuesses, answer }) {
  const happyBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{numOfGuesses} guesses</strong>.
      </p>
    </div>
  )

  const sadBanner = (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )

  switch (gameStatus) {
    case 'won':
      return happyBanner
    case 'lost':
      return sadBanner
  }
}

export default Banner;
