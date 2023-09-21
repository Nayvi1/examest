import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link>Login | Student</Link>
        </li>
        <li>
          <Link>Login | Teacher</Link>
        </li>
      </ul>
      <img src="logo.png" alt="logo" />
    </nav>
  );
}

export default NavBar;
