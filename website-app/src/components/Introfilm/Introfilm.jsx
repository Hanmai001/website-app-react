import React from "react";
import clsx from "clsx";
import styles from "./Introfilm.module.css";
import HeaderIntroFilm from "./HeaderIntroFilm";
import LogIn from "../LogIn/LogIn";
import Picture from "../Picture/Picture";
import lstReview from "./reviewLst";

var pages = [];
var num_page = lstReview.length / 5;
for (var i = 0; i < num_page; i++) 
    pages.push(i + 1);

function ReviewSumary(props) {
    let content = props.content
    content = content.slice(0, 200) + '...'
    return <div className={styles.review}>
        <div className={styles.ava}>
            <img src="https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg"/>
            <p>{props.user}</p>
        </div>
        <div className={styles.sumr}>
            <h1>{props.title}</h1>
            <p>
                {content}
                <a href="/">Xem thêm</a>
            </p>
        </div>
        <div className={styles.icon}>
            <p>{props.like}</p>
            <i className="ti-heart"></i>
            <p>{props.cmt}</p>
            <i className="ti-comment"></i>
        </div>

    </div>
}
function Introfilm(film) {
    const nvat = film.main;
    const news = film.news;
    const [login, setLogin] = React.useState(false)
    function popDown(){
        setLogin(false)
    }
    function popUp(){
        setLogin(true)
    }

    return <div>
        <HeaderIntroFilm log = {popUp}/>
        <LogIn trigger = {login} unlog = {popDown}/>

        <div className={styles.intro}>
            <h1 style={{textTransform: "capitalize"}}>{film.title}</h1>
            <div className={styles.content} >
                <div className={styles.photo}>
                     <Picture src={film.src} title={""}/>
                </div>
                <iframe className={styles.trailer} src="https://www.youtube.com/embed/dd_R1GQwKlY" title="YouTube video player" frameborder="0"></iframe>
                <div className={styles.lstInfo}>
                    <p className={styles.info}>Tên phim:
                        <span>{film.title}</span>
                    </p>
                    <p className={styles.info}>Thể loại:
                        <span>{film.type}</span>
                    </p>
                    <p className={styles.info}>Năm sản xuất:
                        <span>{film.year}</span>
                    </p>
                    <p className={styles.info}>Quốc gia:
                        <span>{film.nation}</span>
                    </p>
                    <p className={styles.info}>Nội dung:
                        <span>{film.sumary}</span>
                    </p>
                </div>
                <div className={styles.rate}>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <span>Rating: {film.rate}</span>
                </div>
                <div className={styles.lstReview}>
                    <p>Top review</p>
                    {lstReview.map((item, index) => (<ReviewSumary user={item.user} key={item.key} title={item.title} like={item.like} share={item.share} cmt={item.cmt} content={item.content}/>))}
                </div>
            </div>
            <div className={styles.side}>
                <div className={styles.artist}>
                    <p>Nhân vật/Diễn viên</p>
                    <p className={styles.line}>none</p>
                    {nvat.map((item) => (<div className={styles.nvat}>
                        <img src={item.img}></img>
                        <p>{item.name}</p>
                    </div>))}
                </div>
                <div className={styles.news}>
                    <p className={styles.extra}>Tin tức liên quan</p>
                    <p className={styles.line}>none</p>
                    {news.map((item, index) => (<div className={styles.new}>
                        <a href={item.src} target="_blank" rel="noopener noreferrer">
                            <img alt="" src={item.img}
                            width="150" height="90"/>
                            <p>{item.title.length > 60 ? item.title.slice(0, 60) + "..." : item.title}</p>
                        </a>
                    </div>))}
                    

                </div>
            </div>

        </div>
       
    </div>
} 

export default Introfilm;