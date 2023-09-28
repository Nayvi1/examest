import { useEffect, useState } from "react";
import { Questions } from "./useQuestions";

/* eslint-disable react/prop-types */
function QuestionContext({ children }) {
  const [questions, setQuestions] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchQuestions() {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/quiz");
      const data = await res.json();
      setQuestions(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <Questions.Provider
      value={{
        questions,
        isLoading,
      }}
    >
      {children}
    </Questions.Provider>
  );
}

export default QuestionContext;
