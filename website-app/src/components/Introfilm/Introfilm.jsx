import React from "react";
import clsx from "clsx";
import styles from "./Introfilm.module.css";

function Introfilm(film) {

    return <div className={styles.intro}>
        <p className={styles.line}>none</p>
        <h1>{film.title}</h1>
        <div className={styles.content} >
            
        </div>
    </div>
} 

export default Introfilm;