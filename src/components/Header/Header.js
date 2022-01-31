import React from "react";
// import '../../assets/css/blk-design-system.min.css'
import '../../assets/css/font-awesome.min.js'
import OpenseaImage from '../../assets/img/opensea.png'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-to navbar-with-image"
      color-on-scroll="100"
    >
      <div className="container">
        <div className="navbar-translate">
          <a
            className="navbar-brand"
            href="https://butteyes.com"
            rel="tooltip"
            title="ButtEyes"
            data-placement="bottom"
            target="_blank"
          >
            <img src="../config/images/logo.png" style={{width:"45px"}}/>
          </a>
          <button
            className="navbar-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
           
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
              <img src="../config/images/logo.png" style={{width:"45px"}}/>
              </div>
              <div className="col-6 collapse-close text-right">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation-index"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{backgroundColor:"azure"}}
                >
                  <i className="tim-icons icon-simple-remove"></i>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip"
                title="Follow us on Twitter"
                data-placement="bottom"
                href="https://twitter.com/ButtEyesNFT"
                target="_blank"
              >
                <i className="fab fa-twitter" style={{fontSize:"30px"}}></i>
                <p className="d-lg-none d-xl-none">Twitter</p>
              </a>
            </li>
            <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip"
                title="Like us on Instagram"
                data-placement="bottom"
                href="https://instagram.com/butteyesnft"
                target="_blank"
              >
                <i className="fab fa-instagram" style={{fontSize:"30px"}}></i>
                <p className="d-lg-none d-xl-none">Instagram</p>
              </a>
            </li>
            <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip"
                title="Follow us on Opensea"
                data-placement="bottom"
                href="https://opensea.io/collection/butteyes"
                target="_blank"
              >
                <img src={OpenseaImage} width={"30px"}/>
                <p className="d-lg-none d-xl-none">Opensea</p>
              </a>
            </li>
            {/* <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip"
                title="Follow us on Opensea"
                data-placement="bottom"
                href="#"
                target="_blank"
              >
                <img src={TelegramImage} width={"18px"}/>
                <p className="d-lg-none d-xl-none">Telegram</p>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link butteyes-bold-text background-butteyes-menu" href="about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link butteyes-bold-text background-butteyes-menu"
                href="contactus"
              >
                Have an issue?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
