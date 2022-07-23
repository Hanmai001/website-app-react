import React from "react";
//Page Homepage
import HomePage from "../HomePage/HomePage";
//Page Introfilm
import Introfilm from "../Introfilm/Introfilm";
import HeaderIntroFilm from "../Introfilm/HeaderIntroFilm";
import film from "./film";
//Personal Profile
import MemberPage from "../MemberPage/MemberPage";
function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      {/*
        <Introfilm
=======
      
      {/* <HomePage /> */}
     
      {/* <Introfilm
>>>>>>> Stashed changes
        src={film.src}
        title={film.title}
        type={film.type}
        sumary={film.sumary}
        year={film.year}
        nation={film.nation}
        rate={film.rate}
        main={film.main}
        news={film.news}
        key={film.key}
<<<<<<< Updated upstream
      />
      */}
      <HomePage />
=======
      /> */}
      <MemberPage/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
