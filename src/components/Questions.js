import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import getQuestion from "../requests/getQuestion";
import QuestionsContext from "../utils/QuestionsContext";

function Questions() {
  const [question, setQuestion] = useState("");
  const [count, setCount] = useState(1);
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [category, setCategory] = useState("");
  const [showHint, setShowHint] = useState(false);

  const { numOfQuestions } = useContext(QuestionsContext);

  useEffect(() => {
    getQuestion(setQuestion, setAnswer, setCategory);
  }, []);

  const navigate = useNavigate();

  const handleAnswer = () => {
    setShowAnswer(true);
  };

  const handleHint = () => {
    setShowHint(true);
  };

  const handleQuestion = () => {
    if (count < numOfQuestions) {
      getQuestion(setQuestion, setAnswer, setCategory);
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
    <div>
      <div className="question-wrapper">
        <button type="button" onClick={backToHome}>
          <MdOutlineArrowBack />
        </button>
        <button type="button" onClick={handleHint}>
          Get Hint
        </button>
        {showHint ? <div>{category}</div> : null}
        <h3>Question: {count}</h3>
        <p>Total Questions: {numOfQuestions} </p>
        <div data-testid="question-id">{question}</div>
      </div>

      <div className="answer-wrapper">
        <button type="button" onClick={handleAnswer}>
          Show Answer
        </button>
        {showAnswer ? <div data-testid="answer-id">{answer}</div> : null}
      </div>

      {count < numOfQuestions ? (
        <button type="button" onClick={handleQuestion}>
          Next Question
        </button>
      ) : (
        <button type="button" onClick={handleQuestion}>
          End Quiz
        </button>
      )}
    </div>
  );
}

export default Questions;
