import React from "react";
import { useNavigate } from "react-router-dom";

function EndQuiz() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const playAgain = () => {
    navigate("/questions");
  };

  return (
    <div>
      <p>Hello this is the end of the quiz</p>
      <button type="button" onClick={backToHome}>
        Back to Home
      </button>
      <button type="button" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
}

export default EndQuiz;
