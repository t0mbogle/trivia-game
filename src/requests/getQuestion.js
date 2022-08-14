import axios from "axios";

const getQuestion = (setQuestion, setAnswer) => {
  const endpoint = "http://jservice.io/api/random";

  axios
    .get(endpoint)
    .then((res) => {
      const { question } = res.data[0];
      const { answer } = res.data[0];
      setQuestion(question);
      setAnswer(answer);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getQuestion;
