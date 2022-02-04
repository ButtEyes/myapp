import React, { Fragment } from "react";
import Logooo from "../assets/img/logo.png";
import Diamond from "../assets/img/Diamond.png";
import Silver from "../assets/img/Silver.png";
import Gold from "../assets/img/Gold.jpg";
import Bronze from "../assets/img/Bronze.png";
import Roadmap from "../assets/img/roadmap.JPEG";

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
                    ButtEyes is an NFT collection created for the Lock Screen of
                    our phones. We created ButtEyes without the use of AI to
                    evoke a sense of unique themes which is not found in most
                    collections on the market. In the near future we will be
                    releasing 5 additional collections, each unique in its own
                    way. With ButtEyes, we aim to create a new premium market
                    for exclusive wallpapers and phone cases. Be one of the
                    first to take your place in this new journey!!
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
                                As the ButtEyes team, our main mission is to create the customizable accessory market they deserve for our phones, which have become the indispensable center of our lives. While doing this, we made our customer group accessible only with reference codes, except for pre-sales, in order to maintain the premium feel. Thus, we tried to increase the investment value of our products and increase the interest in our project. One of the natural benefits of our project is that we can use phone cases and many other accessories as certificates of authenticity of purchased NFTs. Our customer, who makes a purchase from our pre-sales, will have access to a reference code that he can use in the pre-sale of the next release, as well as other reference codes, the number of which may vary depending on the version he buys. Using these referral codes you can put your friends, family or a Metamask thief in exchange for money. NFT owners who have purchased a diamond version NFT from the pre-sales and have it in their wallet on the day of decision will have a one-time free phone case. People who had the NFT in the transfers made until the decision day cannot benefit from this. In the next process, each of our customers who define their NFT on our website will be able to request their authenticity certificates for a fee, regardless of the version. So none of your friends will be able to put the NFT you bought on their wallpaper and say "I own it now". Our biggest goal for the future is to open our first physical store where our customers can personalize according to their wishes, create ButtEyes and NFTs of other collections to be created by the ButtEyes team and have their certificates, to make owning an NFT mean something other than the already existing reasons. No planting trees, no donations, no apes, no pixels, just 👀.
                              </div>
                              <div className="tab-pane butteyes-light-text" style={{ color: "black" }} id="link61">
                              Every customer who makes a purchase during the public mint period will have reference codes, the number of which varies according to the version they have. These reference codes will act as a whitelist in the next release. Diamond version will be rewarded with 4 reference codes, gold version with 3, silver version with 2 and bronze version with 1 reference code.
Diamond version holders will be able to have the authenticity certificates (phone cases) of the NFT they held on the day of decision, free of charge. Owners of other versions will be able to get their certificates(phone cases) from the online sales to be opened, but this process will be opened to our customers in the rarity order. Apart from that, we will send the gold version owners the poster of their NFT. Join us!

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
