import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/blk-design-system.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Logooo from "./assets/img/loading.png";
import Home from "./components/Home";
import About from "./components/About";
import Minting from "./components/Minting";
import ContactUs from "./components/ContactUs";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-div1">
          <div className="loading-div2">
            <div className="card-loading">
              <div class="fold"></div>
              <div class="fold"></div>
              <div class="fold"></div>
              <div class="fold"></div>
              <div class="fold"></div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
