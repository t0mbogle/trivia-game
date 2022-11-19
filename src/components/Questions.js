import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import QuestionsContext from "../utils/QuestionsContext";

function Questions() {
  const [count, setCount] = useState(1);
  // Count - 1 will return the first object in the allQuestions array.
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const { numOfQuestions, allQuestions } = useContext(QuestionsContext);

  const handleAnswer = () => {
    setShowAnswer(true);
  };
  const handleHint = () => {
    setShowHint(true);
  };

  const navigate = useNavigate();
  const handleQuestion = () => {
    if (count < numOfQuestions) {
      setShowAnswer(false); // On click of new question, collapse answer & hint
      setShowHint(false);
      setCount((prev) => prev + 1);
    } else {
      navigate("/end-quiz");
    }
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex justify-between m-6">
        <button type="button" onClick={backToHome} className="btn text-[20px]">
          <MdOutlineArrowBack />
        </button>
        <p className="text-[#7D83FF]">
          Question: {count}/{numOfQuestions}
        </p>
      </div>

      <div className="content-wrapper">
        <p data-testid="question-id" className="mx-6 my-2 text-xl">
          {allQuestions[count - 1].question}
        </p>
        <div className="hint-answer flex justify-center m-3">
          <div className="hint-wrapper flex flex-col px-6 pt-6 pb-2">
            <button type="button" onClick={handleHint} className="btn">
              Get Hint
            </button>
            {showHint ? <p>{allQuestions[count - 1].category}</p> : null}
          </div>
          <div className="answer-wrapper flex flex-col px-6 pt-6 pb-2">
            <button type="button" onClick={handleAnswer} className="btn">
              Show Answer
            </button>
            {showAnswer ? (
              <p data-testid="answer-id">{allQuestions[count - 1].answer}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex justify-end m-6">
        <button type="button" onClick={handleQuestion} className="btn">
          {count < numOfQuestions ? "Next Question" : "End Quiz"}
        </button>
      </div>
    </div>
  );
}

export default Questions;
