import { useEffect, useState } from "react";
import styles from "./ShowOptions.module.css";
import Button from "../etc/Button";
/* eslint-disable react/prop-types */
function ShowOptions({ index = 0, questions, hasAnswered, dispatch }) {
  const [newOptions, setNewOptions] = useState();

  useEffect(() => {
    if (questions !== undefined) {
      setNewOptions(() => {
        const prev = questions[index].options;

        let currentIndex = prev.length,
          randomIndex;
        while (currentIndex > 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [prev[currentIndex], prev[randomIndex]] = [
            prev[randomIndex],
            prev[currentIndex],
          ];
        }
        return prev;
      });
    }
  }, [index, questions]);

  const { question } = questions[index];

  function handleClick(isTrue) {
    if (isTrue) {
      dispatch({ type: "trueAnswer" });
    }
    dispatch({ type: "hasAnswered" });
  }

  function handleNext() {
    dispatch({ type: "nextQuestion" });
    console.log(index);
  }

  function handleFinish() {
    dispatch({ type: "finish" });
  }

  return (
    <div>
      <p>{question}</p>
      <div>
        {newOptions?.map((option) => {
          return (
            <div
              style={{
                color: hasAnswered
                  ? option.isTrue
                    ? "limegreen"
                    : "red"
                  : "black",
                pointerEvents: hasAnswered ? "none" : "all",
                cursor: hasAnswered ? "not-allowed" : "pointer",
              }}
              onClick={() => handleClick(option.isTrue)}
              key={option.option}
            >
              {option.option}
            </div>
          );
        })}
      </div>
      <div className={styles.btnContainer}>
        <Button
          isDisable={!hasAnswered}
          handleClick={
            index + 1 !== questions.length ? handleNext : handleFinish
          }
        >
          {index + 1 !== questions.length ? "Next" : "Finish"}
        </Button>
      </div>
    </div>
  );
}

export default ShowOptions;
