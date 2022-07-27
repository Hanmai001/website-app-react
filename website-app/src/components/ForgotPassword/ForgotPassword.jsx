import React from 'react';
import styles from './ForgotPassword.module.css';
import clsx from "clsx";

function ForgotPassword(){
    return(
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <button className={styles.btn}>
                    <i className="ti-close"></i>
                </button>
                <div className={styles.head}><h2>QUÊN MẬT KHẨU</h2></div>
                <p style={{marginTop: "4rem"}}>Tên đăng nhập</p>
                <input type = "text" placeholder=" Tên đăng nhập" style={{paddingLeft: "0.5rem"}} ></input>
                <p style={{marginTop: '2rem'}}>Mật khẩu gần nhất</p>
                <input type="password" placeholder=" Mật khẩu gần nhất" style={{paddingLeft: "0.5rem"}}></input>
                <p style={{marginTop: '2rem'}}>Số điện thoại xác nhận</p>
                <input type="text" placeholder="Số điện thoại" style={{paddingLeft: "0.5rem"}}></input>
                <div className={styles.forgot}>
                    <button>
                        <a href="/">Lấy mật khẩu</a>
                    </button>
                </div>
                <div className={styles.alter}>
                    <a href="/">Đăng nhập</a>/ <a href="/">Đăng kí</a> 
                </div>
            </div>
        </div>)
}

export default ForgotPassword