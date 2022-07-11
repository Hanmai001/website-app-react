import React from "react";
import LogIn from "../LogIn/LogIn";
import styles from "./HeaderIntroFilm.module.css";
function HeaderIntroFilm(props) {
  return (
    <header className={styles.header}>
      <h1>DONGREVIEW</h1>
      <input placeholder="  Tìm kiếm"></input>
      <i className="ti-search"></i>
      <div
        className={styles.login}
        onClick={() => {
          props.log();
        }}
      >
        <i className="ti-github"></i>
        <p className={styles.login}>Đăng nhập</p>
      </div>
      <p className={styles.line}>none</p>
    </header>
  );
}

export default HeaderIntroFilm;
