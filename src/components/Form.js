import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [category, setCategory] = useState("Random");

  const getCategoryQuestion = async () => {
    await axios
      .get("https://jservice.io/api/category?id=17")
      .then((res) => {
        const random = Math.floor(Math.random() * res.data.clues_count);
        const astronomyData = {
          question: res.data.clues[random].question,
          category: res.data.title,
          answer: res.data.clues[random].answer,
        };
        console.log(astronomyData);
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
          title: res.data[0].category.title,
        };
        console.log(randomData);
      })
      .catch((err) => {
        console.log(`${err} <---- error`);
      });
  };

  const filter = () => {
    if (category === "Random") {
      getRandomQuestion();
    } else {
      getCategoryQuestion();
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
            <select className="text-black">
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
