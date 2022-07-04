import React from "react";
import Picture from "../Picture/Picture";
import styles from "./Slider.module.css";
import pics from "./pics";

function Slider() {
    const [pos, setPos] = React.useState(0);
    const [check, setCheck] = React.useState([true, false, false]);
    function increase(){
        if (pos === 2) {
            setPos(0);
        }
        else {
            setPos(pos + 1);
        }
    }
    function decrease(){
        if (pos === 0) {
            setPos(2);
        }
        else {
            setPos(pos - 1);
        }
    }
    function updateCheck(index) {
        setCheck((prevCheck) => {
            for(var i = 0; i < 3; i++) {
                if (prevCheck[i] === true) prevCheck[i] = false;
            }
            prevCheck[index] = true;
            return [...prevCheck];
        })
    }
    return <div className={styles.slider}>
        <button onClick={() => { decrease(); updateCheck(pos);}} className={styles.buttonl}>
            <i className="ti-angle-left"></i>
        </button>
        <button onClick={() => { increase(); updateCheck(pos);}} className={styles.buttonr}>
            <i className="ti-angle-right"></i>
        </button>
        {/*
        {pics.map((pic) => (<Picture src={pic.src} title={pic.title}/>))}
        */}
        <Picture src={pics[4 * pos].src} title={pics[4 * pos].title}/>
        <Picture src={pics[4 * pos + 1].src} title={pics[4 * pos + 1].title}/>
        <Picture src={pics[4 * pos + 2].src} title={pics[4 * pos + 2].title}/>
        <Picture src={pics[4 * pos + 3].src} title={pics[4 * pos + 3].title}/>
        <div className={styles.dot}>
            <span className={check[0] ? styles.sdot : styles.ndot}></span>
            <span className={check[1] ? styles.sdot : styles.ndot}></span>
            <span className={check[2] ? styles.sdot : styles.ndot}></span>
        </div>
        
    </div>
}

export default Slider;