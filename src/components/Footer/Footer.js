import React from "react";
import OpenseaImage from "../../assets/img/opensea.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a href="/">
            <img src="../config/images/logo.png" style={{width:"145px"}}/>
            </a>
          </div>
          <div className="col-md-3">
            <ul className="nav">
              <li className="nav-item">
                <a href="/" className="nav-link butteyes-bold-text">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="about" className="nav-link butteyes-bold-text">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="contactus" className="nav-link butteyes-bold-text">
                  Have an issue?
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="nav">
              <li className="nav-item">
                <a
                  href="https://twitter.com/butteyesnft"
                  className="nav-link butteyes-bold-text"
                >
                  Twitter
                </a>
              </li>
              <li className="nav-item">
                <a href="https://discord.gg/4dksyY9eUG" className="nav-link butteyes-bold-text">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="title butteyes-bold-text"> </h3>
            <div className="btn-wrapper profile">
              <a
                target="_blank"
                href="https://twitter.com/butteyesnft"
                className="btn btn-icon btn-neutral mr-2 btn-round btn-simple"
                data-toggle="tooltip"
                data-original-title="Follow us"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                href="https://discord.gg/4dksyY9eUG"
                className="btn btn-icon btn-neutral btn-round btn-simple"
                data-toggle="tooltip"
                data-original-title="Like us"
              >
                <i className="fab fa-discord"></i>
              </a>
              {/* <a
                target="_blank"
                href="https://opensea.io/ButtEyesNFT"
                className="btn btn-icon btn-neutral  btn-round btn-simple"
                data-toggle="tooltip"
                data-original-title="Follow us"
              >
                <img src={OpenseaImage} width={"38px"} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
