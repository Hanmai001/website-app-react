import React from "react";

//Page Homepage
import HomePage from "../HomePage/HomePage";
//Page Introfilm
import Introfilm from "../Introfilm/Introfilm";
//Page Review
import ReviewPage from "../ReviewPage/ReviewPage";
import film from "./film";

function App() {
  return (
    <div className="App">
      {/*
        <HomePage />
        <Introfilm
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
        />
      */}
      <ReviewPage
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
      />
    </div>
  );
}

export default App;
