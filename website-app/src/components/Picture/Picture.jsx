import React from "react";
import clsx from "clsx";
import styles from "./Picture.module.css";

function Picture(props) {
<<<<<<< Updated upstream
  let title = props.title;
  title = title.slice(0, 15) + "...";
  return (
    <div className={styles.pic} key={props.key}>
      <img src={props.src} style={{ width: "230px", height: "310px" }}></img>
      {props.title === "" ? null : <p title={props.title}>{title}</p>}
=======
    let title = props.title
    title = title.slice(0, 15) + '...'
    return <div className = {styles.pic} key={props.key}>
        <img src={props.src} style={{width: "230px", height: "310px", marginRight: "0px"}}></img>
        {(props.title === "" ? null : <p title={props.title}>{title}</p>)}
>>>>>>> Stashed changes
    </div>
  );
}

export default Picture;
