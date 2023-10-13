import { useCallback, useMemo, useState } from "react";
import { Questions } from "./useQuestions";

/* eslint-disable react/prop-types */
function QuestionContext({ children }) {
  const [questions, setQuestions] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQuestions = useCallback(async function (id = "") {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `http://localhost:3000/quiz${id ? "/" + id : ""}`
      );
      const data = await res.json();
      setQuestions(data);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchQuestion = useCallback(async function (id) {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`http://localhost:3000/quiz/${id}`);
      const data = await res.json();
      setQuestions(data);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const postQuestion = useCallback(async function (questions) {
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
      // fetchQuestions();
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const editQuestion = useCallback(async function (questions, id) {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`http://localhost:3000/quiz/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify(questions),
      });
      res.json();
      // fetchQuestions();
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeQuestion = useCallback(async function (id) {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`http://localhost:3000/quiz/${id}`, {
        method: "DELETE",
      });
      res.json();
      // fetchQuestions();
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      questions,
      isLoading,
      error,
      postQuestion,
      fetchQuestions,
      editQuestion,
      setQuestions,
      removeQuestion,
      fetchQuestion,
    }),
    [
      questions,
      isLoading,
      error,
      postQuestion,
      fetchQuestions,
      editQuestion,
      removeQuestion,
      fetchQuestion,
    ]
  );

  return (
    <Questions.Provider value={contextValue}>{children}</Questions.Provider>
  );
}

export default QuestionContext;
