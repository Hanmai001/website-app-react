import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Page Homepage
import HomePage from "../HomePage/HomePage";
//Page Introfilm
import Introfilm from "../Introfilm/Introfilm";
//Page Review
import ReviewPage from "../ReviewPage/ReviewPage";
//Member Profile
import MemberPage from "../ProfilePage/MemberPage";
import AdminPage from "../ProfilePage/AdminPage";
import SignUp from "../SignUp/SignUp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import AddFilm from "../AddFilm/AddFilm";
import AddReview from "../AddReview/AddReview";
import Page404 from "../ErrorPages/404";
import Page502 from "../ErrorPages/502";
import FindPage from "../FindPage/FindPage";
import EditFilm from "../EditFilm/EditFilm";

function App() {
  return (
    // <AddReview/>
    // <EditFilm/>
    // <FindPage/>
    <Router>
      <Fragment>  
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/introfilm" element={<Introfilm />}></Route>
            <Route exact path="/reviewpage" element={<ReviewPage />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/admin" element={<AdminPage />}></Route>
            <Route exact path="/member" element={<MemberPage />}></Route>
            <Route exact path="/api" ></Route>
            <Route
              exact
              path="/forgotpassword"
              element={<ForgotPassword />}
            ></Route>
            <Route exact path="/admin/addfilm" element={<AddFilm />}></Route>
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
