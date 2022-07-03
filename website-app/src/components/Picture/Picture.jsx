import React from "react";
import clsx from "clsx";
import  styles from "./Picture.module.css";

function Picture(props) {
    return <div className={clsx(styles.row)}>
        <div className={clsx(styles.col, styles.colThird, styles.margin)}>
            <img src={props.src}></img>
        </div>
    </div>
}

export default Picture;