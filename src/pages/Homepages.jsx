import NavBar from "../components/Navbar/NavBar";
import styles from "./HomePage.module.css";

function Homepages() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.landing}>
        <h1>Examest</h1>
        <p>Make or do tests, as simple as making a wordpress website</p>
      </div>
    </main>
  );
}

export default Homepages;
