import React from 'react';
import styles from './SignUp.module.css';
import clsx from "clsx";

function SignUp(){
    return(
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <button className={styles.btn}>
                    <i className="ti-close"></i>
                </button>
                <div className={styles.head}><h2>ĐĂNG KÝ TÀI KHOẢN</h2></div>
                <p style={{marginTop: "4rem"}}>Tên đăng nhập</p>
                <input type = "text" placeholder=" Tên đăng nhập"></input>
                <p style={{marginTop: '2rem'}}>Mật khẩu</p>
                <input type="password" placeholder=" Mật khẩu"></input>
                <p style={{marginTop: '2rem'}}>Nhập lại mật khẩu</p>
                <input type="password" placeholder=" Mật khẩu"></input>
                <div className={styles.signIn}>
                    <button>
                        <a href="/">Đăng kí</a>
                    </button>
                </div>
                <div className={styles.alter}>
                    <a href="/">Đăng nhập</a>   
                </div>
            </div>
        </div>)
}

export default SignUp