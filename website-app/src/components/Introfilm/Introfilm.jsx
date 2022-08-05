import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

import clsx from "clsx";
import styles from "./Introfilm.module.css";
import HeaderTitle from "../Header/HeaderTitle";
import LogIn from "../LogIn/LogIn";
import Picture from "../Picture/Picture";
import Footer from "../Footer/Footer";

var pages = [];
var num_page = 0;
for (var i = 0; i < num_page; i++) pages.push(i + 1);

function ReviewSumary(props) {
  let content = props.content;
  content = content.slice(0, 200) + "...";

  return (
    <div className={styles.review}>
      <div className={styles.ava}>
        <img src={props.avt} />
        <p>{props.fullname}</p>
      </div>
      <div className={styles.sumr}>
        <h1>{props.title}</h1>
        <p>
          {content}
          <Link
            to="/reviewpage"
            state={{
              reviewID: props.reviewID,
              filmID: props.filmID,
              userID: props.userID,
              title: props.title,
              content: props.content,
              like: props.like,
              share: props.share,
              cmt: props.cmt,
              time: props.time,
            }}
          >
            Xem thêm
          </Link>
        </p>
      </div>
      <div className={styles.icon}>
        <p>{props.like}</p>
        <i className="ti-heart"></i>
        <p>{props.cmt}</p>
        <i className="ti-comment"></i>
      </div>
    </div>
  );
}

const stars = [0, 1, 2, 3, 4];
function Introfilm() {
  const url1 = "/api/news.json";
  const url2 = "/api/reviews.json";
  const url3 = "/api/users.json";
  const [users, setUser] = React.useState([]);
  const [login, setLogin] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const [check, setCheck] = React.useState(false);
  const [checkLike, setCheckL] = React.useState(false);
  const [rateFilm, setRate] = React.useState(0);
  const [arr_new, setNews] = React.useState([]);
  const [lstReview, setReviews] = React.useState([]);

  const location = useLocation();
  const { filmID, title, src, type, year, nation, sumary, trailer, rate, main } =
    location.state; // "useLocation" to get the state

  React.useEffect(() => {
    console.log("filmID: ", filmID);
    const getData = async () => {
      try {
        console.log("before getting data");
        const res1 = await axios.get(url1);
        const res2 = await axios.get(url2);
        const res3 = await axios.get(url3);
        console.log("get users", res3.data);
        console.log("get news", res1.data);
        console.log("get reviews", res2.data);
        let count = 0;
        const rv = res2.data.filter((item) => {
          if (item.filmID === filmID) {
            return true;
          }
        });
        num_page = Math.ceil(rv.length / 5);
        setNews(
          res1.data.filter((item) => {
            if (item.filmID === filmID && count <= 4) {
              count++;
              return true;
            }
          })
        );
        console.log("rv_lst: ", rv);
        setReviews(rv);
        setUser(res3.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  function clickStar(index) {
    setRate(index + 1);
  }
  function clickLike(event) {
    if (checkLike === false) {
      setCheckL(true);
    } else {
      setCheckL(false);
    }
    event.preventDefault();
  }
  function clickContent(event) {
    if (check === false) {
      setCheck(true);
    } else {
      setCheck(false);
    }
    event.preventDefault();
  }
  function increase(event) {
    if (pos < num_page - 1) {
      setPos(pos + 1);
    }
    event.preventDefault();
  }
  function decrease(event) {
    if (pos > 0) {
      setPos(pos - 1);
    }
    event.preventDefault();
  }
  function setBegin(event) {
    setPos(0);
    event.preventDefault();
  }
  function setEnd(event) {
    setPos(num_page - 1);
    event.preventDefault();
  }
  function popDown() {
    setLogin(false);
  }
  function popUp() {
    setLogin(true);
  }
  return (
    <div>
      <HeaderTitle log={popUp} />
      <div className={styles.intro}>
        <h1 style={{ textTransform: "capitalize" }}>{title}</h1>
        <div className={styles.options}>
              <ul className={styles.expose}>
                  <li>
                    <a>Xóa phim</a>
                  </li>
                  <li>
                    <a>Chỉnh sửa phim</a>
                  </li>
              </ul>
                <button className={clsx("ti-more",styles.opbutton)}></button>
            </div>
        <div className={styles.content}>
          <div className={styles.photo}>
            <Picture src={src} title={""} />
          </div>
          <iframe
            className={styles.trailer}
            src={trailer}
            title="YouTube video player"
            frameborder="0"
          ></iframe>
          <div className={styles.lstInfo}>
            <p className={styles.info}>
              Tên phim:
              <span>{title}</span>
            </p>
            <p className={styles.info}>
              Thể loại:
              <span>{type}</span>
            </p>
            <p className={styles.info}>
              Năm sản xuất:
              <span>{year}</span>
            </p>
            <p className={styles.info}>
              Quốc gia:
              <span>{nation}</span>
            </p>
            <p className={styles.info}>
              Nội dung:
              <span>
                {sumary.length > 70 && !check
                  ? sumary.slice(0, 300) + "..."
                  : sumary + "..."}
                {sumary.length > 70 && !check ? (
                  <a
                    href="/"
                    style={{ color: "rgb(127, 162, 243)" }}
                    onClick={clickContent}
                  >
                    Xem thêm
                  </a>
                ) : (
                  <a
                    href="/"
                    style={{ color: "rgb(127, 162, 243)" }}
                    onClick={clickContent}
                  >
                    Thu gọn
                  </a>
                )}
              </span>
            </p>
          </div>
          <div className={styles.rate}>
            {stars.map((star, index) => {
              if (index >= rateFilm) {
                return (
                  <i
                    onClick={() => {
                      clickStar(index);
                    }}
                    className="ti-star"
                  ></i>
                );
              } else {
                return (
                  <i
                    onClick={() => {
                      clickStar(index);
                    }}
                    className="fa-solid fa-star"
                  ></i>
                );
              }
            })}

            <span>Rating: {rateFilm}/5</span>
          </div>
          <div className={styles.lstReview}>
            <p>Top review</p>
            <p className={styles.writeReview}>Viết bài</p>
            {checkLike ? (
              <i
                onClick={clickLike}
                className={clsx("fa-solid fa-heart", styles.love)}
              ></i>
            ) : (
              <i
                onClick={clickLike}
                className={clsx("ti-heart", styles.love)}
              ></i>
            )}

            {lstReview.map((item, index) => {
              if (index >= 5 * pos && index <= 5 * pos + 4) {
                return (
                  <ReviewSumary
                    reviewID={item._id}
                    key={item._id}
                    filmID={item.filmID}
                    userID={item.userID}
                    fullname={
                      users.find((user) => user._id === item.userID).fullname
                    }
                    avt={users.find((user) => user._id === item.userID).avt}
                    title={item.title}
                    like={item.like}
                    share={item.share}
                    cmt={item.cmt}
                    content={item.content}
                    time={item.time}
                  />
                );
              }
            })}

            <div className={styles.square}>
              <button onClick={setBegin}>
                <i className="ti-angle-double-left"></i>
              </button>
              <button onClick={decrease} className={styles.buttonl}>
                <i className="ti-angle-left"></i>
              </button>

              <span className={styles.dot}>{pos + 1}</span>

              <button onClick={increase}>
                <i className="ti-angle-right"></i>
              </button>
              <button onClick={setEnd}>
                <i className="ti-angle-double-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.artist}>
            <p>Nhân vật/Diễn viên</p>
            <p className={styles.line}>none</p>
            {main.map((item) => (
              <div className={styles.nvat}>
                <img src={item.img}></img>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.news}>
            <p className={styles.extra}>Tin tức liên quan</p>
            <p className={styles.line}>none</p>
            {arr_new.map((item, index) => (
              <div className={styles.new}>
                <a href={item.src} target="_blank" rel="noopener noreferrer">
                  <img alt="" src={item.img} width="150" height="90" />
                  <p>
                    {item.title.length > 60
                      ? item.title.slice(0, 60) + "..."
                      : item.title}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LogIn trigger={login} unlog={popDown} />
      <Footer />
    </div>
  );
}

export default Introfilm;
