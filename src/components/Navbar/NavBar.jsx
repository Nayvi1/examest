import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="login/student">Login | Student</Link>
        </li>
        <li>
          <Link to="login/teacher">Login | Teacher</Link>
        </li>
      </ul>
      <img src="logo.png" alt="logo" />
    </nav>
  );
}

export default NavBar;
