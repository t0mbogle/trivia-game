import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsContext from "../utils/QuestionsContext";

function EndQuiz() {
  const navigate = useNavigate();

  const { numOfQuestions } = useContext(QuestionsContext);

  const backToHome = () => {
    navigate("/");
  };

  const playAgain = () => {
    navigate("/questions");
  };

  return (
    <div>
      <p>Hello this is the end of the quiz</p>
      <button type="button">
        View all {numOfQuestions} Questions and Answers
      </button>
      <br />
      <br />
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
