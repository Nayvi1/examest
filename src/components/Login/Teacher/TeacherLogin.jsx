import styles from "./TeacherLogin.module.css";

function TeacherLogin() {
  return (
    <form className={styles.form}>
      <label htmlFor="Email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button>Login</button>
    </form>
  );
}

export default TeacherLogin;
