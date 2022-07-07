import React from 'react';
import styles from './HeaderIntroFilm.module.css';
function HeaderIntroFilm() {
    return <header className={styles.header}>
        <div className={styles.modal}>
            <div  className={styles.modalContainer}>

            </div>
        </div>
        <h1>DONGREVIEW</h1>
        <input placeholder='  Tìm kiếm'></input>
        <div>
            <i className="ti-github"></i>
            <p className={styles.login}>Đăng nhập</p> 
        </div>
    
    </header>
}

export default HeaderIntroFilm;