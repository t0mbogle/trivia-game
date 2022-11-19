import React, { useState, useContext } from "react";
import axios from "axios";
import QuestionsContext from "../utils/QuestionsContext";

function Form() {
  const [category, setCategory] = useState("Random");

  const { numOfQuestions, setNumOfQuestions, allQuestions } =
    useContext(QuestionsContext);

  const getCategoryQuestion = async () => {
    await axios
      .get("https://jservice.io/api/category?id=17")
      .then((res) => {
        const random = Math.floor(Math.random() * res.data.clues_count);
        const astronomyData = {
          question: res.data.clues[random].question,
          answer: res.data.clues[random].answer,
          category: res.data.title,
        };
        allQuestions.push(astronomyData);
        console.log(allQuestions);
      })
      .catch((err) => {
        console.log(`${err} <---- error`);
      });
  };

  const getRandomQuestion = async () => {
    await axios
      .get("http://jservice.io/api/random")
      .then((res) => {
        const randomData = {
          question: res.data[0].question,
          answer: res.data[0].answer,
          category: res.data[0].category.title,
        };
        allQuestions.push(randomData);
        console.log(allQuestions);
      })
      .catch((err) => {
        console.log(`${err} <---- error`);
      });
  };

  const filter = () => {
    let count = 0;
    while (category === "Random" && count < numOfQuestions) {
      getRandomQuestion();
      count += 1;
    }
    while (category !== "Random" && count < numOfQuestions) {
      getCategoryQuestion();
      count += 1;
    }
  };

  return (
    <>
      <form className="flex flex-col border-2 border-[#7D83FF] rounded-xl my-4">
        <div className="p-4">
          <label htmlFor="category">
            Category
            <select
              className="text-black"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Random">Random</option>
              <option value="Astronomy">Astronomy</option>
            </select>
          </label>
        </div>
        <div className="p-4">
          <label htmlFor="number of questions">
            Number of Questions
            <select
              className="text-black"
              onChange={(e) => setNumOfQuestions(e.target.value)}
            >
              <option value="2">2</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
      </form>
      <button className="btn" type="button" onClick={filter}>
        GET Qs
      </button>
    </>
  );
}

export default Form;
