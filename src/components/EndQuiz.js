import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsContext from "../utils/QuestionsContext";

function EndQuiz() {
  const [showQuestions, setShowQuestions] = useState(false);
  const navigate = useNavigate();

  const { numOfQuestions, allQuestions } = useContext(QuestionsContext);

  const backToHome = () => {
    navigate("/");
  };

  const playAgain = () => {
    navigate("/questions");
  };

  const handleShowQuestions = () => {
    setShowQuestions(true);
  };

  return (
    <div>
      <p className="text-[#7D83FF] text-xl m-4">End of quiz</p>

      <div>
        <button type="button" className="btn m-4" onClick={handleShowQuestions}>
          View all {numOfQuestions} Questions and Answers
        </button>
        {showQuestions
          ? allQuestions.map((data) => (
              <div key={data.question}>
                <p>{data.question}</p>
                <p className="text-[#7D83FF]">{data.answer}</p>
              </div>
            ))
          : null}
      </div>

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
