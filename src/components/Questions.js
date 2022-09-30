import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getQuestion from "../requests/getQuestion";

// eslint-disable-next-line react/prop-types
function Questions({ numOfQuestions }) {
  const [question, setQuestion] = useState("");
  const [count, setCount] = useState(1);
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [category, setCategory] = useState("");
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    getQuestion(setQuestion, setAnswer, setCategory);
  }, []);

  const navigate = useNavigate();

  const handleQuestion = () => {
    if (count < 10) {
      getQuestion(setQuestion, setAnswer, setCategory);
      setShowAnswer(false); // On click of new question, collapse answer & hint
      setShowHint(false);
      setCount((prev) => prev + 1);
    } else {
      navigate("/end-quiz");
    }
  };

  const handleAnswer = () => {
    setShowAnswer(true);
  };

  const handleHint = () => {
    setShowHint(true);
  };

  return (
    <div>
      <div className="question-wrapper">
        <button type="button" onClick={handleHint}>
          Get Hint
        </button>
        {showHint ? <div>{category}</div> : null}
        <h3>Question: {count}</h3>
        {/* eslint-disable-next-line react/prop-types */}
        <p>Total Qs: {numOfQuestions}</p>
        <div data-testid="question-id">{question}</div>
      </div>

      <div className="answer-wrapper">
        <button type="button" onClick={handleAnswer}>
          Show Answer
        </button>
        {showAnswer ? <div data-testid="answer-id">{answer}</div> : null}
      </div>

      <button type="button" onClick={handleQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default Questions;
