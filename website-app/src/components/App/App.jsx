import React, { useState } from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import LogIn from "../LogIn/LogIn";
import HomeContent from "../HomeContent/HomeContent";

function App() {
  const [login, setLogin] = useState(false)

  function popDown(){
    setLogin(false)
  }

  function popUp(){
    setLogin(true)
  }
  return (
    <div className="App">
      <Header 
        log = {popUp}
      />
      <Slider />
      <HomeContent />
      <Footer />
      <LogIn 
        trigger = {login}
        unlog = {popDown}
      />
    </div>
  );
}

export default App;
