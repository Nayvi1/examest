import { Outlet } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}

export default Login;
