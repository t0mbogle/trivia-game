import React, { useState } from "react";
import getQuestion from "../requests/getQuestion";

function Questions() {
  const [question, setQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleQuestion = () => {
    getQuestion(setQuestion, setAnswer);
    setShowQuestion(true);
    setShowAnswer(false); // On click of new question, collapse answer
  };

  const handleAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <div className="question-wrapper">
        <button type="button" onClick={handleQuestion}>
          Get Question
        </button>
        {showQuestion ? <div data-testid="question-id">{question}</div> : null}
      </div>
      <div className="answer-wrapper">
        <button type="button" onClick={handleAnswer}>
          Show Answer
        </button>
        {showAnswer ? <div data-testid="answer-id">{answer}</div> : null}
      </div>
    </div>
  );
}

export default Questions;
