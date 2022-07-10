import React from "react";
import GlobalStyle from "../GlobalStyle/index";
//Page Homepage
import HomePage from "../HomePage/HomePage";
//Page Introfilm
import Introfilm from "../Introfilm/Introfilm";
import HeaderIntroFilm from "../Introfilm/HeaderIntroFilm";
import film from "./film";

function App() {
  return (
      <div className="App">
        <GlobalStyle>
        {/*
          <HomePage />
        */}
        <Introfilm src={film.src} title={film.title} type={film.type} sumary={film.sumary} year={film.year} nation={film.nation} rate={film.rate} main={film.main} news={film.news} key={film.key}/>
        
      </GlobalStyle>
      </div>
  );
}

export default App;
