import { useParams } from "react-router-dom";
import styles from "./Quiz.module.css";
import { useQuestions } from "../context/useQuestions";
import { useEffect, useReducer } from "react";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import QuizShow from "../components/QuizShow/QuizShow";
import StartQuiz from "../components/StartQuiz/StartQuiz";
import EndQuiz from "../components/EndQuiz/EndQuiz";

const initState = {
  hasAnswered: false,
  index: 0,
  score: 0,
  status: "idle",
};

function reducer(state, action) {
  switch (action.type) {
    case "hasAnswered":
      return { ...state, hasAnswered: true };
    case "nextQuestion":
      return { ...state, index: state.index + 1, hasAnswered: false };
    case "trueAnswer":
      return { ...state, score: state.score + 1 };
    case "start":
      return { ...initState, status: "start" };
    case "finish":
      return { ...state, status: "finish" };
    default:
      break;
  }
}

function Quiz() {
  const { questionId } = useParams();

  const { fetchQuestion, questions, isLoading, error, setQuestions } =
    useQuestions();

  const [{ hasAnswered, index, score, status }, dispatch] = useReducer(
    reducer,
    initState
  );

  useEffect(() => {
    setQuestions(undefined);
    fetchQuestion(questionId);
  }, [fetchQuestion, questionId, setQuestions]);

  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!questions) return;

  return (
    <div className={styles.container}>
      {status === "idle" && <StartQuiz qz={questions} dispatch={dispatch} />}
      {status === "start" && (
        <QuizShow
          qz={questions}
          hasAnswered={hasAnswered}
          score={score}
          dispatch={dispatch}
          index={index}
        />
      )}
      {status === "finish" && <EndQuiz score={score} />}
    </div>
  );
}

export default Quiz;
