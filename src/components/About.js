import React, { Fragment } from "react";
import Logooo from "../assets/img/logo.png";

import Diamond from "../assets/img/800.png";
import DiamondYdd from "../assets/img/794.png";
import DiamondYds from "../assets/img/798.png";
import DiamondBbys from "../assets/img/1170.png";
import DiamondBbsa from "../assets/img/1186.png";
import Silver from "../assets/img/565.png";
import Gold from "../assets/img/957.png";
import Bronze from "../assets/img/1115.png";

import Roadmap from "../assets/img/roadmap.PNG";

function About() {
  return (
    <Fragment>
      <div className="page-header" style={{ backgroundColor: "#eee22a" }}>
        <div className="section blogs-2" id="blogs-2">
          <div className="section">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5 mb-5 mb-lg-0 ">
                  <h1
                    className="butteyes-title-header"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <img src={Logooo} className="butteyes-eyes-logos" />{" "}
                    ButtEyes
                    <br />
                    <span
                      className="butteyes-light-text"
                      style={{
                        fontSize: "50px",
                        textAlign: "center",
                        fontFamily: "Modak",
                      }}
                    >
                      More info!!
                    </span>
                  </h1>
                  <p
                    className="mt-4 butteyes-light-text"
                    style={{ color: "black" }}
                  >
                    We will be realeasing 2 additional collections 
                  </p>
                  <a
                    href="/"
                    className="btn btn-warning-butteyes mt-4 butteyes-bold-text"
                  >
                    Mint ButtEyes
                  </a>
                  <div
                    className="container-fluid"
                    style={{ paddingTop: "100px" }}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <ul
                              className="nav nav-pills nav-pills-primary flex-column"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link active butteyes-bold-text"
                                  data-toggle="tab"
                                  href="#link41"
                                  role="tablist"
                                >
                                  Roadmap
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link butteyes-bold-text"
                                  data-toggle="tab"
                                  href="#link51"
                                  role="tablist"
                                >
                                  Our Mission and Goals
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link butteyes-bold-text"
                                  data-toggle="tab"
                                  href="#link61"
                                  role="tablist"
                                >
                                  Member Advantages
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-8">
                            <div className="tab-content">
                              <div
                                className="tab-pane active butteyes-light-text"
                                id="link41"
                                style={{ color: "black" }}
                              >
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-lg"
                                >
                                  <img src={Roadmap} />
                                </a>
                              </div>
                              <div
                                className="tab-pane butteyes-light-text"
                                style={{ color: "black" }}
                                id="link51"
                              >
                               As the ButtEyes team, our main mission is to create the customizable accessory market they deserve for our phones, which have become the indispensable center of our lives. While doing this, we made our customer group semi-accessible with reference codes, in order to maintain the premium feel. Thus, we tried to increase the investment value of our products and increase the interest in our project. One of the natural benefits of our project is that we can use phone cases and many other accessories as certificates of authenticity of purchased NFTs. Our customer, who makes a purchase from our minting sales, will have access to a reference code that they can use in the minting sales of the next release, as well as other reference codes, the number of which can may vary depending on the version they get. Using these referral codes you can put your friends family or a wallet thief into this community. NFT owners who minted a NFT with Diamond Tag and an Epic Frame will get a one-time free Buttie Phone Case which will become their NFTs authenticity certificates. People who had the NFT in the transfers made until the day of decision will not be able to benefit from this. You have to have it on your wallet on the day of decision. In the next step, each of our customers who define their NFT on our website will be able to request their Buttie Phone Case (Authenticity Certificates) for a small fee, regardless of the version. So none of your friends will be able to put the NFT you bought on their wallpaper and say “I own it now”. Our biggest goal for the future is to open our first physical store where our customers can personalize according to their wishes, create ButtEyes and NFTs of other collections to be created by the ButtEyes team and have their certificates, to make owning an NFT mean something other than the already existing reasons. No planting trees, no donations, no apes, no pixels, just👀.
                              </div>
                              <div className="tab-pane butteyes-light-text" style={{ color: "black" }} id="link61">
                              Every customer who makes a purchase during the public mint period will have reference codes, the number of which varies according to the version they have. These reference codes will act as a whitelist in the next releases. Diamond Tag version will be rewarded with 4 reference codes, Gold Tag version with 3, Silver Tag version with 2 and Bronze Tag version with 1.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    style={{ padding: "100px", marginBottom: "165px" }}
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={Diamond}
                          alt="First slide"
                        />
                      </div>
                      <div class="carousel-item active">
                        <img
                          className="d-block w-100"
                          src={Gold}
                          alt="Second slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          className="d-block w-100"
                          src={Silver}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          className="d-block w-100"
                          src={Bronze}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          className="d-block w-100"
                          src={DiamondBbsa}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          className="d-block w-100"
                          src={DiamondBbys}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          className="d-block w-100"
                          src={DiamondYdd}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          className="d-block w-100"
                          src={DiamondYds}
                          alt="Third slide"
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <img src={Roadmap} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
