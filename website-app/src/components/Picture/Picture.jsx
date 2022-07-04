import React from "react";
import clsx from "clsx";
import  styles from "./Picture.module.css";

function Picture(props) {
    let title = props.title
    title = title.slice(0, 15) + '...'
    return <div className={clsx(styles.row)}>
        <div className={clsx(styles.col, styles.colThird, styles.margin, styles.pic)}>
            <img src={props.src} style={{width: "230px", height: "310px"}}></img>
            <p title={props.title}>{title}</p>
        </div>
    </div>
}

export default Picture;