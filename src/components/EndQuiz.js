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
      <p className="text-[#7D83FF] text-xl m-4">End of quiz</p>
      <button type="button" className="btn m-4">
        View all {numOfQuestions} Questions and Answers
      </button>
      <div className="m-4">
        <button type="button" onClick={backToHome} className="btn mx-3">
          Back to Home
        </button>
        <button type="button" onClick={playAgain} className="btn mx-3">
          Play Again
        </button>
      </div>
    </div>
  );
}

export default EndQuiz;
