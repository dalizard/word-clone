import React from "react";

function Banner({ banner, answer }) {
  const happyBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{banner.guessesCount} guesses</strong>.
      </p>
    </div>
  )

  const sadBanner = (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )
  return banner.hasWon ? happyBanner : sadBanner
}

export default Banner;
