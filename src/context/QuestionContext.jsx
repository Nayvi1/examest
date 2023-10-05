import { useCallback, useEffect, useState } from "react";
import { Questions } from "./useQuestions";

/* eslint-disable react/prop-types */
function QuestionContext({ children }) {
  const [questions, setQuestions] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  async function fetchQuestions(id = "") {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`http://localhost:3000/quiz${id ? "/" + id:""}`);
      const data = await res.json();
      setQuestions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const mFetchQuestions = useCallback((id)=>{
    fetchQuestions(id)
  },[])

  async function postQuestion(questions) {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch("http://localhost:3000/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify(questions),
      });
      res.json();
      fetchQuestions();
    } catch (err) {
      console.error(err);
      setError(err.message);
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
        error,
        postQuestion,
        mFetchQuestions
      }}
    >
      {children}
    </Questions.Provider>
  );
}

export default QuestionContext;
