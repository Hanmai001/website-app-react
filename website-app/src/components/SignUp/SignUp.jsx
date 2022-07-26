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
                <p style={{marginTop: "3rem"}}>Tên đăng nhập</p>
                <input type = "text" placeholder=" Tên đăng nhập" style={{paddingLeft: "0.5rem"}}></input>
                <p style={{marginTop: '1rem'}}>Mật khẩu</p>
                <input type="password" placeholder=" Mật khẩu" style={{paddingLeft: "0.5rem"}}></input>
                <p style={{marginTop: '1rem'}}>Nhập lại mật khẩu</p>
                <input type="password" placeholder=" Nhập lại mật khẩu" style={{paddingLeft: "0.5rem"}}></input>
                <p style={{marginTop: '1rem'}}>Số điện thoại đăng ký</p>
                <input type="text" placeholder=" Nhập số điện thoại" style={{paddingLeft: "0.5rem"}}></input>
                <div className={styles.signIn}>
                    <button>
                        <a href="/">Đăng kí</a>
                    </button>
                </div>
                <div className={styles.alter}>
                    <a href="/">Đăng nhập</a>/  <a href="/">Quên mật khẩu</a>
                </div>
            </div>
        </div>)
}

export default SignUp