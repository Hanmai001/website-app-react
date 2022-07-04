import React from "react";
import Picture from "../Picture/Picture";
import styles from "./Slider.module.css";
import pics from "./pics";

function Slider() {
    return <div className={styles.slider}>
        <button className={styles.buttonl}>
            <i className="ti-angle-left"></i>
        </button>
        <button className={styles.buttonr}>
            <i className="ti-angle-right"></i>
        </button>
        {pics.map((pic) => (<Picture src={pic.src} title={pic.title}/>))}

    </div>
}

export default Slider;