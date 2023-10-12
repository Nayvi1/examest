import styles from "./Student.module.css";
import Button from "../components/etc/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Student() {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate(id);
  }

  function handleChange(event) {
    const { value } = event.target;
    setId(value);
  }

  return (
    <div className={styles.container}>
      <h2>Search for question</h2>
      <form onSubmit={handleSubmit} className={styles.form} action="">
        <input  type="number" value={id} onChange={handleChange} />
        <Button>Search</Button>
      </form>
    </div>
  );
}

export default Student;
