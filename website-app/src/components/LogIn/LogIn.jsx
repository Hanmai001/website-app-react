import React from 'react';
import styles from './LogIn.module.css';
import clsx from "clsx";

function LogIn(props){
    return( (props.trigger) ? (
        <div className={styles.background}>
            <div className={styles.box}>
                <button className={clsx(styles.btn, "ti-close")} onClick={()=>{props.unlog()}}></button>
                <div className={styles.head}><h2>ĐĂNG NHẬP</h2></div>
                <p>Tên đăng nhập</p>
                <input type = "text" placeholder="Tên đăng nhập"></input>
                <p style={{marginTop: '2rem'}}>Mật khẩu</p>
                <input type="password" placeholder="Mật khẩu"></input>
                <div className={styles.signIn}><button>Đăng nhập</button></div>
                <div className={styles.alter}><p>Đăng kí/Quên mật khẩu</p></div>
            </div>
        </div>)
     : ""
    )
}

export default LogIn