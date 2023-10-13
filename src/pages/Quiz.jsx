import { useParams } from "react-router-dom";
import styles from "./Quiz.module.css";
import { useQuestions } from "../context/useQuestions";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import QuizShow from "../components/QuizShow/QuizShow";

function Quiz() {
  const { questionId } = useParams();
  //next time create a new function for fetching specefic data
  const { fetchQuestion, questions, isLoading, error } = useQuestions();

  useEffect(() => {
    fetchQuestion(questionId);
  }, [fetchQuestion, questionId]);

  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className={styles.container}>
      <QuizShow qz={questions} />
    </div>
  );
}

export default Quiz;
