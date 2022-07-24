import React from "react";
import { Link } from "react-router-dom";
//test
import film from "../App/film";

import axios from "axios";
import clsx from "clsx";
import Picture from "../Picture/Picture";
import styles from "./Slider.module.css";
import pics from "./pics";

const checks = [0, 1, 2];
function Slider() {
  const [pos, setPos] = React.useState(0);
  // const [pics, setPics] = React.useState([])

  // React.useEffect(() => {
  //   console.log(pics);
  //   const getSliders = async () => {
  //     const res = await axios.get(
  //       "https://mocki.io/v1/f3cdca9a-37bd-459a-8353-c9ab45eae488"
  //     );
  //     console.log("get data", res.data);
  //     setPics(res.data.sliders);
  //   };
  //   getSliders();
  // }, []);

  function increase() {
    if (pos === 2) {
      setPos(0);
    } else {
      setPos(pos + 1);
    }
  }
  function decrease() {
    if (pos === 0) {
      setPos(2);
    } else {
      setPos(pos - 1);
    }
  }

  return (
    <div className={styles.slider}>
      <button onClick={decrease} className={styles.buttonl}>
        <i className="ti-angle-left"></i>
      </button>
      <button onClick={increase} className={styles.buttonr}>
        <i className="ti-angle-right"></i>
      </button>
      <div className={clsx(styles.show)}>
        {pics.map((pic, index) => {
          if (index >= 4 * pos && index <= 4 * pos + 3) {
            return (
              <Link
                to="/introfilm"
                state={{
                  key: film.key,
                  title: film.title,
                  src: film.src,
                  type: film.type,
                  year: film.year,
                  nation: film.nation,
                  sumary: film.sumary,
                  trailer: film.trailer,
                  rate: film.rate,
                  main: film.main,
                  news: film.news,
                }}
              >
                <Picture src={pic.src} title={pic.title} key={pic.key} />
              </Link>
            );
          }
        })}
      </div>
      <div className={styles.dot}>
        {checks.map((check, index) => (
          <span className={index === pos ? styles.sdot : styles.ndot}></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
