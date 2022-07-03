import React from 'react';
import styles from './Header.module.css';
function Header() {
    return <header className={styles.header}>
        <h1>DONGREVIEW</h1>
        <input placeholder='  Tìm kiếm'></input>
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
        <p>none</p>   
    </header>
}

export default Header;