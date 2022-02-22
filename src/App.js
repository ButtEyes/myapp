import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/blk-design-system.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Logooo from "./assets/img/loading.png";
import LoadingLogo from "./assets/img/loading.GIF";
import Home from "./components/Home";
import About from "./components/About";
import Minting from "./components/Minting";
import ContactUs from "./components/ContactUs";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(true), 5000);
  // }, []);

  return !isLoading ? (
    <Fragment>
      <Header />
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route exact path="/minting" element={<Minting />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Fragment>
  ) : (
    <div className="loading-div1">
      <div className="loading-div2">
        <img src={LoadingLogo} alt="loading logo" width={"10%"} />
      </div>
    </div>
  );
}

export default App;
