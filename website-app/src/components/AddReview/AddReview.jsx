import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styles from "./AddReview.module.css";
import HeaderTitle from "../Header/HeaderTitle";
import LogIn from "../LogIn/LogIn";
import Footer from "../Footer/Footer";


function AddReview() {
    return (
    <div className={styles.reviewPage}>
        <HeaderTitle/>
        <div className={styles.intro}>
            <h1 style={{ textTransform: "capitalize" }}>VIẾT BÀI REVIEW</h1>
        </div>
        <div className={styles.review}>
        <div className={styles.sumr}>
            <button className={styles.esc}>X</button>
            <h1 style={{paddingTop:"6rem"}}>Nhập tên bộ phim bạn muốn review: </h1>
            <div>
            <textarea className={styles.filmName} wrap="hard" placeholder="Nhập tên phim"></textarea>
        </div>
        <h1>Nhập chi tiết bài review của bạn: </h1>
        <div>
            <textarea className={styles.detail} wrap="hard" placeholder="Nhập chi tiết"></textarea>
        </div>
        </div>
        </div>
      <Footer />
    </div>
    );
}

export default AddReview;
