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
import SignUp from "../SignUp/SignUp"
import ForgotPassword from "../ForgotPassword/ForgotPassword";

function App() {
  return (
      <ForgotPassword/>
      // <SignUp/>
    // <Router>
    //   <Fragment>
    //     <div>
    //       <Routes>
    //         <Route exact path="/" element={<HomePage />}></Route>
    //         <Route exact path="/introfilm" element={<Introfilm />}></Route>
    //         <Route exact path="/reviewpage" element={<ReviewPage />}></Route>
    //       </Routes>
    //     </div>
    //   </Fragment>z
    // </Router>
  );
}

export default App;
