import { Link } from "react-router-dom";
import QuestionList from "../components/QuestionList/QuestionList";
import SearchBar from "../components/SearchBar/SearchBar";
import Button from "../components/etc/Button";
import styles from "./Teacher.module.css";

function Teacher() {
  return (
    <div className={styles.container}>
      <div>
        <SearchBar />
        <QuestionList />
        <div className={styles["button-container"]}>
          <Link to="newQuestion">
            <Button>Create</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
