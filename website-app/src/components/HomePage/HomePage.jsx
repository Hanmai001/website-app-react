import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LogIn from "../LogIn/LogIn";
import Slider from "../Slider/Slider";

import styles from "./HomePage.module.css";
import theater from "./theater";
import phimle from "./phimle";
import anime from "./phimhoathinh";
import Picture from "../Picture/Picture";
import top1 from "./top_nam";
import top2 from "./top_thang";
import top3 from "./top_tuan";

function HomePage() {
  const [login, setLogin] = React.useState(false);
  function popDown() {
    setLogin(false);
  }

  function popUp() {
    setLogin(true);
  }
  return (
    <div>
      <Header log={popUp} />
      <Slider />

      <div className={styles.content}>
        <div className={styles.board}>
          <div className={styles.topTitle}>
            <p>TOP PHIM NĂM</p>
          </div>
          <div className={styles.top}>
            {top1.map((pic, index) => (
              <div>
                <span>{index + 1}</span>
                <img
                  src={pic.src}
                  title={pic.title}
                  key={pic.key}
                  style={{
                    width: "50%",
                    height: "17%",
                    display: "block",
                    margin: "2rem 0 0 9.5rem",
                  }}
                ></img>
                <center>
                  <a href="/">{pic.title}</a>
                </center>
              </div>
            ))}
          </div>
          <div className={styles.topTitle}>
            <p>TOP PHIM THÁNG</p>
          </div>
          <div className={styles.top}>
            {top2.map((pic, index) => (
              <div>
                <span>{index + 1}</span>
                <img
                  src={pic.src}
                  title={pic.title}
                  key={pic.key}
                  style={{
                    width: "50%",
                    height: "17%",
                    display: "block",
                    margin: "2rem 0 0 9.5rem",
                  }}
                ></img>
                <center>
                  <a href="/">{pic.title}</a>
                </center>
              </div>
            ))}
          </div>
          <div className={styles.topTitle}>
            <p>TOP PHIM TUẦN</p>
          </div>
          <div className={styles.top}>
            {top3.map((pic, index) => (
              <div>
                <span>{index + 1}</span>
                <img
                  src={pic.src}
                  title={pic.title}
                  key={pic.key}
                  style={{
                    width: "50%",
                    height: "17%",
                    display: "block",
                    margin: "2rem 0 0 9.5rem",
                  }}
                ></img>
                <center>
                  <a href="/">{pic.title}</a>
                </center>
              </div>
            ))}
          </div>
        </div>
        <a href="/" className={styles.title}>
          PHIM CHIẾU RẠP
        </a>
        <div className={styles.list1}>
          {theater.map((pic) => (
            <Picture src={pic.src} title={pic.title} />
          ))}
        </div>
        <a href="/" className={styles.title}>
          PHIM LẺ
        </a>
        <div className={styles.list2}>
          {phimle.map((pic) => (
            <Picture src={pic.src} title={pic.title} />
          ))}
        </div>
        <a href="/" className={styles.title}>
          PHIM HOẠT HÌNH
        </a>
        <div className={styles.list2}>
          {anime.map((pic) => (
            <Picture src={pic.src} title={pic.title} />
          ))}
        </div>
      </div>
      <Footer />
      <LogIn trigger={login} unlog={popDown} />
    </div>
  );
}

export default HomePage;
