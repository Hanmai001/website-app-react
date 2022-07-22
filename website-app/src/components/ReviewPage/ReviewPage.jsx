import React from "react";
import clsx from "clsx";
import styles from "./ReviewPage.module.css";
import HeaderTitle from "../Header/HeaderTitle";
import LogIn from "../LogIn/LogIn";
import Picture from "../Picture/Picture";
import Footer from "../Footer/Footer";
import lstReview from "../Introfilm/reviewLst";
import cmts from "./cmts";

var pages = [];
var num_page = Math.ceil(cmts.length / 8);
for (var i = 0; i < num_page; i++) pages.push(i + 1);

function Comment(props) {
  return (
    <div className={styles.cmt}>
      <div className={styles.ava}>
        <img src={props.ava} />
        <p>{props.user}</p>
      </div>
      <p>{props.content}</p>
    </div>
  );
}

function ReviewPage(film) {
  const nvat = film.main;
  const news = film.news;
  const [login, setLogin] = React.useState(false);
  const [like, setLike] = React.useState(lstReview[0].like);
  const [check, setCheck] = React.useState(false);
  const [pos, setPos] = React.useState(0);

  function increase() {
    if (pos < num_page - 1) {
      setPos(pos + 1);
    }
  }
  function popDown() {
    setLogin(false);
  }
  function popUp() {
    setLogin(true);
  }
  function clickLike(event) {
    if (check === false) {
      setCheck(true);
      setLike(like + 1);
    } else {
      setCheck(false);
      setLike(like - 1);
    }
    //event.preventDefault();
  }
  return (
    <div className={styles.reviewPage}>
      <HeaderTitle log={popUp} />
      <div className={styles.intro}>
        <h1 style={{ textTransform: "capitalize" }}>{film.title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.review}>
          <div className={styles.ava}>
            <img src="https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg" />
            <p>{lstReview[0].user}</p>
          </div>
          <div className={styles.sumr}>
            <h1>{lstReview[0].title}</h1>
            <h2>Ngày đăng: {lstReview[0].time}</h2>
            <p>{lstReview[0].content}</p>
            <div className={styles.icon}>
              <p>{like}</p>
              {check ? (
                <i onClick={clickLike} className="fa-solid fa-heart"></i>
              ) : (
                <i onClick={clickLike} className="ti-heart"></i>
              )}

              <p>{lstReview[0].cmt}</p>
              <a href="#mycmt">
                <i className="ti-comment"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.lstCmt}>
          <h3>BÌNH LUẬN</h3>
          <div className={styles.writeCmt}>
            <div className={styles.ava}>
              <img src="https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg" />
              <p>{lstReview[0].user}</p>
            </div>
            <textarea
              id="mycmt"
              rows="6"
              maxLength="1000"
              placeholder="Viết bình luận của bạn"
            ></textarea>
          </div>
          {cmts.map((item, index) => {
            if (index <= 8 * pos + 7) {
              return (
                <Comment
                  user={item.user}
                  key={item.key}
                  ava={item.ava}
                  content={item.content}
                />
              );
            }
          })}
          {pos === num_page - 1 ? null : (
            <lord-icon
              onClick={increase}
              src="https://cdn.lordicon.com/zvpyzhdi.json"
              trigger="loop"
              delay="1000"
              colors="primary:#6c7b8b"
            ></lord-icon>
          )}
        </div>
      </div>

      <LogIn trigger={login} unlog={popDown} />
      <Footer />
    </div>
  );
}

export default ReviewPage;
