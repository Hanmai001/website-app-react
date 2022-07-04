import React from 'react';
import styles from './Header.module.css';
function Header() {
    return <header className={styles.header}>
        <h1>DONGREVIEW</h1>
        <input placeholder='  Tìm kiếm'></input>
        <div>
            <i className="ti-github"></i>
            <p className={styles.login}>Đăng nhập</p> 
        </div>
       
        <ul className={styles.nav}>
            <li style={{fontSize: '1.8rem', color: '#f5813e'}}>
                PHIM ĐỀ XUẤT
            </li>
            <li>
                Phim mới
            </li>
            <li>
                Thể loại
            </li>
            <li>
                Quốc gia
            </li>
            <li>
                Phim lẻ
            </li>
            <li>
                Phim bộ
            </li>
            <li>
                Phim chiếu rạp
            </li>
        </ul>
        <p className={styles.line}>none</p>   
    </header>
}

export default Header;