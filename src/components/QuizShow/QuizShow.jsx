/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ShowOptions from "../ShowOptions/ShowOptions";
// import { useNavigate } from "react-router-dom";

function QuizShow({ qz, hasAnswered, score, dispatch, index }) {
  const { questions } = qz;

  const [time, setTime] = useState((questions.length / 2) * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((seconds) => {
        return (seconds = seconds - 1);
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (time === 0) {
    // navigate()
  }

  return (
    <>
      <div>
        <p>Number of Questions: {`${index + 1}/${questions.length}`}</p>
        <p>Score: {score}</p>
        <p>{`${Math.floor(time / 60)
          .toString()
          .padStart(2, 0)}:${(time % 60).toString().padStart(2, 0)}`}</p>
      </div>
      <div>
        <ShowOptions
          dispatch={dispatch}
          hasAnswered={hasAnswered}
          index={index}
          questions={questions}
        />
      </div>
    </>
  );
}

export default QuizShow;
