/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "./Question.module.css";

function Question({ question }) {
  
  return (
    <div className={styles.question}>
      <p>{question.name}</p>
      <Link to={`${question.id}`}><i className="fa-solid fa-pencil">X</i></Link>
    </div>
  );
}

export default Question;
