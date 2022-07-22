import React from "react";
import styles from "./HeaderTitle.module.css";
function HeaderTitle(props) {
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

export default HeaderTitle;
