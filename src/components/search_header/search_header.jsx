import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const search = inputRef.current.value;
    if (search === "") return;

    handelSearch(search);
    formRef.current.reset();
  };

  const handelSearch = (search) => {
    props.onSearch(search);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.logoBox}>
        <img className={styles.logoImg} src="../images/logo.png" alt="" />
        <strong className={styles.logoTitle}>Youtube</strong>
      </h1>
      <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search..."
        />
        <button
          className={styles.searchBtn}
          type="submit"
          aria-label="Search video"
        >
          <img className={styles.searchImg} src="../images/search.png" alt="" />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
