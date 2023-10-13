import { useNavigate } from "react-router-dom";
import Button from "../../etc/Button";
import styles from "./TeacherLogin.module.css";
import { useEffect } from "react";
import { useQuestions } from "../../../context/useQuestions";

function TeacherLogin() {
  
  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    
    navigate("/teacher");
  }
  
  const { setQuestions } = useQuestions();
  useEffect(() => {
    return () => {
      setQuestions(undefined);
    };
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="Email">Email:</label>
      <input autoComplete="off" type="text" name="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <Button>Login</Button>
    </form>
  );
}

export default TeacherLogin;
