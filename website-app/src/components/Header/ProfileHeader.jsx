import React, { useState } from 'react';
import styles from './Header.module.css';
import LogIn from '../LogIn/LogIn';
function ProfileHeader(props) {
    return <header className={styles.header}>
        <h1>DONGREVIEW</h1>
        {/* <input placeholder='  Tìm kiếm'></input>
        <i className="ti-search"></i> */}
        <div className={styles.login} onClick={() => {props.log()}}>
            <i className="ti-github"></i>
            <p className={styles.login}>Đăng xuất</p> 
        </div>
    </header>
}

export default ProfileHeader;