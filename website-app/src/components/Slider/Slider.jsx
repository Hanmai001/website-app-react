import React from "react";
import Picture from "../Picture/Picture";
import styles from "./Slider.module.css";

function Slider() {
    return <div className={styles.slider}>
        <button className={styles.buttonl}>oo</button>
        <button className={styles.buttonr}>oo</button>
        <Picture src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/291857995_881261346126260_864105970684654101_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=UdPHTg6M45wAX-dBw7w&_nc_ht=scontent-sin6-4.xx&oh=00_AT9-gW9lq0xzLPK4bjSf_ia8jpjqdzGzeLUDdejiT14hGg&oe=62C5B261"/>
        <Picture src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/291857995_881261346126260_864105970684654101_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=UdPHTg6M45wAX-dBw7w&_nc_ht=scontent-sin6-4.xx&oh=00_AT9-gW9lq0xzLPK4bjSf_ia8jpjqdzGzeLUDdejiT14hGg&oe=62C5B261"/>
        <Picture src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/291857995_881261346126260_864105970684654101_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=UdPHTg6M45wAX-dBw7w&_nc_ht=scontent-sin6-4.xx&oh=00_AT9-gW9lq0xzLPK4bjSf_ia8jpjqdzGzeLUDdejiT14hGg&oe=62C5B261"/>
        <Picture src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/291857995_881261346126260_864105970684654101_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=UdPHTg6M45wAX-dBw7w&_nc_ht=scontent-sin6-4.xx&oh=00_AT9-gW9lq0xzLPK4bjSf_ia8jpjqdzGzeLUDdejiT14hGg&oe=62C5B261"/>
    </div>
}

export default Slider;