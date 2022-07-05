import React from "react";
import styles from "./HomeContent.module.css";
import pics from "./pics";
import Picture from "../Picture/Picture";

function HomeContent() {

    return <div className={styles.content}>
        <div className={styles.board}>
            <p className={styles.item1}>TOP PHIM THÁNG</p>
            <div>ggg</div>
            <div>fdfsf</div>
        </div>
        <div className={styles.listItem}>
             {pics.map(pic => (<Picture src={pic.src} title={pic.title}/>))}
        </div>
    </div>
}

export default HomeContent;