import React from "react";
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
        <Picture
          src={pics[4 * pos].src}
          title={pics[4 * pos].title}
          key={pics[4 * pos].key}
        />
        <Picture
          src={pics[4 * pos + 1].src}
          title={pics[4 * pos + 1].title}
          key={pics[4 * pos + 1].key}
        />
        <Picture
          src={pics[4 * pos + 2].src}
          title={pics[4 * pos + 2].title}
          key={pics[4 * pos + 2].key}
        />
        <Picture
          src={pics[4 * pos + 3].src}
          title={pics[4 * pos + 3].title}
          key={pics[4 * pos + 3].key}
        />
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
