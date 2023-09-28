import { useQuestions } from "../../context/useQuestions";
import Question from "./Question";
import Loading from "../Loading/Loading";

import styles from "./QuestionList.module.css";

function QuestionList() {
  const { questions, isLoading } = useQuestions();
  console.log(questions, isLoading);

  if (isLoading) return <Loading />;

  return (
    <div className={styles["question-list"]}>
      {questions?.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
}

export default QuestionList;
