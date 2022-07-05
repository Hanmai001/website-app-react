import React from "react";
import styles from "./HomeContent.module.css";
import pics from "./pics";
import Picture from "../Picture/Picture";

function HomeContent() {

    return <div className={styles.content}>
        <div className={styles.listItem}>
             {pics.map(pic => (<Picture src={pic.src} title={pic.title}/>))}
        </div>
    </div>
}

export default HomeContent;