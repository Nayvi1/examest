import { Outlet, useLocation } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <div className={styles.container}>
      <h1 className={styles.h1}>
        {location.pathname === "/login/student"
          ? "Login As Student"
          : "Login As Teacher"}
      </h1>
        <Outlet />
      </div>
    </>
  );
}

export default Login;
