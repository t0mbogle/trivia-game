import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsContext from "../utils/QuestionsContext";

function StartQuiz() {
  const navigate = useNavigate();

  const { numOfQuestions, setNumOfQuestions } = useContext(QuestionsContext);

  const handleStartQuiz = () => {
    // If able to fetch all data navigate to questions
    navigate("/questions");
  };

  return (
    <div>
      <h1 className="text-[#7D83FF] text-3xl">Trivia Game</h1>

      <form className="flex flex-col border-2 border-[#7D83FF] rounded-xl my-4">
        <div className="p-4">
          <label htmlFor="category">
            Category
            <select className="text-black ml-4">
              <option value="random">Random</option>
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
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </form>

      <p>Questions for the next game: {numOfQuestions} </p>
      <button
        type="button"
        onClick={handleStartQuiz}
        className="btn bg-[#3D7068] border-[#3D7068] m-4"
      >
        Start
        {/* Start button should make the API call. If unsuccessful, render error message below */}
      </button>
    </div>
  );
}

export default StartQuiz;
