import styles from "./ShowOptions.module.css";
/* eslint-disable react/prop-types */
function ShowOptions({ index = 0, questions }) {
  if (questions === undefined) return "hi";

  const { question, options } = questions[index];
  console.log(question);

  const newOptions = options;

  // for (let i = 0; i < options.length; i++) {
  //   const rand = Math.floor(Math.random() * 4);
  //   const prev = newOptions[rand];
  //   newOptions[rand] = options[i];
  //   newOptions[rand] = prev;
  //   console.log(newOptions, rand);
  // }

  return (
    <div>
      <p>{question}</p>
      <div>
        <p>{}</p>
        <p>{}</p>
        <p>{}</p>
        <p>{}</p>
      </div>
    </div>
  );
}

export default ShowOptions;
