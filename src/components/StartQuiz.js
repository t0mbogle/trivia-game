import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import QuestionsContext from "../utils/QuestionsContext";

function StartQuiz() {
  const { numOfQuestions, allQuestions } = useContext(QuestionsContext);

  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (allQuestions.length === numOfQuestions) {
      navigate("/questions");
    }
  };

  return (
    <div>
      <h1 className="text-[#7D83FF] text-3xl">Trivia Game</h1>
      <Form />
      {/* <form className="flex flex-col border-2 border-[#7D83FF] rounded-xl my-4">
        <div className="p-4">
          <label htmlFor="category">
            Category
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="text-black ml-4"
            >
              <option value="random">Random</option>
              <option value="astronomy">Astronomy</option>
            </select>
          </label>
        </div>
        <div className="p-4">
          <label htmlFor="number of questions">
            Number of Questions
            <select
              onChange={(e) => setNumOfQuestions(e.target.value)}
              className="text-black ml-4"
            >
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </form> */}

      <p>Questions for the next game: {numOfQuestions}</p>
      <button type="button" onClick={handleStartQuiz} className="btn m-4">
        Start
        {/* Start button should make the API call. If unsuccessful, render error message below */}
      </button>
    </div>
  );
}

export default StartQuiz;
