import { useNavigate } from "react-router-dom";
import Button from "../../etc/Button";
import styles from "./StudentLogin.module.css";
import { useQuestions } from "../../../context/useQuestions";
import { useEffect } from "react";

function StudentLogin() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/student");
  }

  const { setQuestions } = useQuestions();
  useEffect(() => {
    return () => {
      setQuestions(undefined);
    };
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">Name:</label>
      <input autoComplete="off" type="text" name="name" id="name" />
      <Button>Enter</Button>
    </form>
  );
}

export default StudentLogin;
