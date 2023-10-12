import { useParams } from "react-router-dom";
import styles from "./Quiz.module.css";

function Quiz() {
  const { questionId } = useParams();

  return <div>{questionId}</div>;
}

export default Quiz;
