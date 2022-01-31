import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/blk-design-system.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Minting from "./components/Minting";
import ContactUs from "./components/ContactUs";

function App() {
  return (
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
  );
}

export default App;
