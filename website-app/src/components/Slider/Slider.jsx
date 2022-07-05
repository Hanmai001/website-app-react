import React from "react";
import Picture from "../Picture/Picture";
import styles from "./Slider.module.css";
import pics from "./pics";

const checks = [0, 1, 2];
function Slider() {
    const [pos, setPos] = React.useState(0);
    function increase(){
        if (pos === 2) {
            console.log('render increase1');
            setPos(0);
        }
        else {
            setPos(pos + 1);
            console.log(pos, 'pos');
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
    return <div className={styles.slider}>
        <button onClick={decrease} className={styles.buttonl} value={pos}>
            <i className="ti-angle-left"></i>
        </button>
        <button onClick={increase} className={styles.buttonr} value={pos}>
            <i className="ti-angle-right"></i>
        </button>
        <Picture src={pics[4 * pos].src} title={pics[4 * pos].title}/>
        <Picture src={pics[4 * pos + 1].src} title={pics[4 * pos + 1].title}/>
        <Picture src={pics[4 * pos + 2].src} title={pics[4 * pos + 2].title}/>
        <Picture src={pics[4 * pos + 3].src} title={pics[4 * pos + 3].title}/>
        <div className={styles.dot}>
            {/* 
            <span className={check[0] ? styles.sdot : styles.ndot}></span>
            <span className={check[1] ? styles.sdot : styles.ndot}></span>
            <span className={check[2] ? styles.sdot : styles.ndot}></span>
            */}
            {checks.map((check, index) => (<span className={index === pos ? styles.sdot : styles.ndot}></span>))}
        </div>
        
    </div>
}

export default Slider;