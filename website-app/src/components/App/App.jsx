import React from "react";
import GlobalStyle from "../GlobalStyle/index";
//Page Homepage
import HomePage from "../HomePage/HomePage";
//Page Introfilm
import Introfilm from "../Introfilm/Introfilm";
import HeaderIntroFilm from "../Introfilm/HeaderIntroFilm";
import films from "../Slider/pics";

function App() {
  return (
      <div className="App">
        <GlobalStyle>
          {/*
          <HeaderIntroFilm />
          <Introfilm src={films[0].src} title={films[0].title} key={films[0].key}/>
        */}
        <HomePage />
        
      </GlobalStyle>
      </div>
  );
}

export default App;
