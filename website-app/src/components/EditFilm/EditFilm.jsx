import React from "react";
import styles from "./EditFilm.module.css";
import clsx from "clsx";
import axios from "axios";

function EditFilm() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.head}>
          <h2>THÊM PHIM</h2>
        </div>
        <div className={styles.input}>
          <p>Tên phim: </p>
          <p>*</p>
          <input type="text" placeholder="Tên đăng nhập" required></input>
        </div>
        <div className={styles.input}>
          <p>Source ảnh: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link ảnh"></input>
          <p className={styles.trailer}>Link trailer: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link trailer"></input>
        </div>
        <div className={styles.input}>
          <p>Thể loại: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập thể loại"></input>
          <p className={styles.year}>Năm sản xuất:</p>
          <p>*</p>
          <input type="text" placeholder="Nhập năm sản xuất"></input>
        </div>
        <div className={styles.input}>
          <p>Quốc gia:</p>
          <p>*</p>
          <input type="text" placeholder="Nhập quốc gia"></input>
        </div>
        <div className={clsx(styles.input, styles.content)}>
          <p>Nội dung:</p>
          <p>*</p>
          <textarea
            rows="8"
            cols="91"
            maxLength="1000"
            placeholder="Nhập nội dung"
          ></textarea>
        </div>

        <div className={styles.input}>
          <p>Link tin tức 1: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 1"></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 2 </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 2"></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 3: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 3"></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 4: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 4"></input>
        </div>
        <div className={styles.input}>
          <p>Link tin tức 5: </p>
          <p>*</p>
          <input type="text" placeholder="Nhập link tin tức 5"></input>
        </div>

        <div className={styles.addFilm}>
          <button>
            <a href="/admin/addfilm">Thêm phim</a>
          </button>
          <button>
            <a href="/admin">Hủy</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditFilm;
