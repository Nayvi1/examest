import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <input
      type="text"
      name="search"
      className={styles.input}
      placeholder="search..."
    />
  );
}

export default SearchBar;
