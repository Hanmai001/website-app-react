import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styles from "./ReviewPage.module.css";
import HeaderTitle from "../Header/HeaderTitle";
import LogIn from "../LogIn/LogIn";
import Footer from "../Footer/Footer";

var pages = [];
var num_page = 1;
for (var i = 0; i < num_page; i++) pages.push(i + 1);

function Comment(props) {
  const url = "/api/users.json";
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        const usr = res.data.find((item) => item._id === props.userID);
        console.log("user: ", usr);
        setUser(usr);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.cmt}>
      <div className={styles.ava}>
        <img src={user.avt} />
        <p>{user.fullname}</p>
      </div>
      <p>{props.content}</p>
    </div>
  );
}
function FormReport(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <button className={styles.btn} onClick={props.close}>
          <i className="ti-close"></i>
        </button>
        <div className={styles.head}>
          <h2>BÁO CÁO</h2>
        </div>
        <p style={{ marginTop: "4rem" }}>Cho mình biết lí do là gì đi^^</p>
        <textarea
          rows="6"
          maxLength="1000"
          placeholder="Ghi lí do của bạn tại đây"
        ></textarea>
        <div className={styles.send}>
          <button>
            <a href="/">Gửi</a>
          </button>
        </div>
      </div>
    </div>
  );
}

function ReviewPage() {
  const url1 = "/api/users.json";
  const url2 = "/api/comments.json";
  const location = useLocation();
  const { reviewID, filmID, userID, title, content, like, share, cmt, time } =
    location.state;
  const [user, setUser] = React.useState({
    fullname: "",
    avt: "",
  });
  const [cmts, setCmts] = React.useState([]);
  const [login, setLogin] = React.useState(false);
  const [num_like, setLike] = React.useState(like);
  const [check, setCheck] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const [checkOption, setCheckOp] = React.useState(false);
  const [checkForm, setChecF] = React.useState(false);

  React.useEffect(() => {
    console.log("reviewID: ", reviewID);
    const getData = async () => {
      try {
        const res1 = await axios.get(url1);
        const res2 = await axios.get(url2);
        const usr_review = res1.data.find((item) => item._id === userID);

        const lst_cmt = res2.data.filter((cmt) => {
          if (cmt.reviewID === reviewID) return true;
        });
        num_page = Math.ceil(lst_cmt.length / 8);
        setUser({
          fullname: usr_review.fullname,
          avt: usr_review.avt,
        });
        console.log("lst_cmt: ", lst_cmt);
        setCmts(lst_cmt);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  function clickOption(event) {
    if (checkOption === false) {
      setCheckOp(true);
    } else {
      setCheckOp(false);
    }
    event.preventDefault();
  }
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
  function close() {
    setChecF(false);
  }
  function open() {
    {
      setChecF(true);
    }
  }
  function clickLike(event) {
    if (check === false) {
      setCheck(true);
      setLike(num_like + 1);
    } else {
      setCheck(false);
      setLike(num_like - 1);
    }
    event.preventDefault();
  }
  const postCmt = (e) => {
    e.preventDefault();
    // const article = {
    //   _id: 13,
    //   reviewID: 1,
    //   userID: 5,
    //   filmID: 1,
    //   like: 3,
    //   content: "Phim coi tốn băng vệ sinh vì phim như máu loz?",
    // };
    // const headers = {
    //   Authorization: "Bearer my-token",
    //   "My-Custom-Header": "foobar",
    // };
    // axios
    //   .post("http://localhost:3000/comments.json/", article, { headers })
    //   .then((response) => {
    //     console.log("Posting data,", response);
    //     this.setState({ articleId: response.data.id });
    //   })
    //   .catch((error) => {
    //     console.error("There was an error!", error);
    //   });
  };
  return (
    <div className={styles.reviewPage}>
      <HeaderTitle log={popUp} />

      <div className={styles.intro}>
        <h1 style={{ textTransform: "capitalize" }}>{title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.review}>
          <div className={styles.ava}>
            <img src={user.avt} />
            <p>{user.fullname}</p>
          </div>

          <div className={styles.sumr}>
            <h1>{title}</h1>
            <h2>Ngày đăng: {time}</h2>
            <p>
              {content}
              <ul onClick={clickOption} className={styles.option}>
                <li>
                  <i className="fa-solid fa-ellipsis"></i>
                  {checkOption ? (
                    <ul className={styles.choices}>
                      <li onClick={open}>Báo cáo</li>
                      <li>Xóa bài viết</li>
                    </ul>
                  ) : null}
                </li>
              </ul>
              {checkForm ? <FormReport close={close} /> : null}
            </p>
            <div className={styles.icon}>
              <p>{num_like}</p>
              {check ? (
                <i onClick={clickLike} className="fa-solid fa-heart"></i>
              ) : (
                <i onClick={clickLike} className="ti-heart"></i>
              )}

              <p>{cmt}</p>
              <i className="ti-comment"></i>
            </div>
          </div>
        </div>
        <div className={styles.lstCmt}>
          <h3>BÌNH LUẬN</h3>
          <div className={styles.writeCmt}>
            <div className={styles.ava}>
              <img src={user.avt} />
              <p>{user.fullname}</p>
            </div>
            <textarea
              onKeyDown={(event) => {
                if (event.shiftKey === true) {
                  event.target.value = event.target.value + "\n";
                } else if (event.key === "Enter") {
                  postCmt();
                }
              }}
              rows="6"
              maxLength="1000"
              placeholder="Viết bình luận của bạn"
            ></textarea>
            <button onClick={postCmt} id="post_cmt">
              Đăng
            </button>
          </div>
          {cmts.map((item, index) => {
            if (index <= 8 * pos + 7) {
              return (
                <Comment
                  userID={item.userID}
                  key={item._id}
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
