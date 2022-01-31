import React, { Fragment } from "react";
import Logooo from "../assets/img/logo.png";
import Diamond from "../assets/img/Diamond.png";
import Silver from "../assets/img/Silver.png";
import Gold from "../assets/img/Gold.jpg";
import Bronze from "../assets/img/Bronze.png";

function About() {
  return (
    <Fragment>
      <div className="page-header" style={{ overflow: "auto",backgroundColor:"#eee22a" }}>
        <div className="section blogs-2" id="blogs-2">
          <div className="section">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5 mb-5 mb-lg-0 ">
                <h1 className="butteyes-title-header" style={{ textAlign: "center" }}>
            <img src={Logooo} className="butteyes-eyes-logos" /> ButtEyes 
              <br />
              <span className="butteyes-light-text" style={{fontSize:"50px", textAlign:"center"}}>More info!!</span>
            </h1>
                  <p className="mt-4 butteyes-light-text" style={{color:"black"}}>
                    ButtEyes is an NFT collection created without the use of AI
                    to evoke a sense of unique themes not found in most
                    collections on the market. In the near future we will be
                    releasing 10 additional collections, each unique in its own
                    way. With ButtEyes, we aim to create a new premium market
                    for personalized wallpapers and phone cases. Once the
                    ButtEyes Team has released all 10 parts of the collection,
                    it will be a closed community that you can only enter with
                    insider references. The reference number of each NFT owner
                    will vary based on the version of NFTs they have. Be one of
                    the first to take your place in this new market!!
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
                                  Mission
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
                              <div className="tab-pane active butteyes-light-text" id="link41" style={{color:"black"}}>
                              As ButtEyes, our goal is to help you show the
                                attention they deserve to our phones, which have
                                become the center of our lives. While doing
                                this, we decided to make it difficult to access
                                our products in order not to lose the premium
                                feel. For this reason, ButtEyes will have a
                                customer group that can only be entered by
                                reference, except for the pre-sale. ButtEyes
                                product sales will be carried out in 2 stages
                                according to our plans. A 10-episode OpenSea
                                sale period followed by a market sale for a
                                limited time. We will define referral codes that
                                allow everyone who makes a purchase in sales in
                                our OpenSea store to participate in the market
                                sale according to the version of the NFT
                                purchased. These codes will be the only
                                opportunity for those who do not make purchases
                                in the OpenSea pre-sale, but want to become our
                                customers and be included in this elite group.
                                Our pre-sale customers will be rewarded with
                                other advantages apart from these reference
                                codes. Early access to new collections that the
                                ButtEyes team will reveal in the future is just
                                one of these opportunities. Our customers, who
                                participate in the market sale with a reference
                                code, will have the right to purchase one of
                                each product sold. Thus, we plan to preserve our
                                distinguished clientele and rarity. The tags for
                                pre-sale and market sale items will be different
                                from each other. Take your place in this new
                                market!
                              </div>
                              <div className="tab-pane butteyes-light-text" style={{color:"black"}} id="link51">
                              Our mission is to be a pioneer in the creation of a market that can provide a personalized premium feel to our phones, which have become the indispensable center of our lives.
                              </div>
                              <div className="tab-pane" id="link61">
                                <ul>
                                  <li className="butteyes-light-text" style={{color:"black"}}>
                                   - Every customer who makes a purchase during
                                    the OpenSea sale period will be entitled to
                                    have the same labeled phone case as the NFT
                                    they have at the end of the 10-part pre-sale
                                    period, free of charge. This will be the
                                    only way to reach phone cases with the
                                    pre-sale label.(The phone cases which will
                                    be sold in market sale are going to be
                                    labeled as market sale versions.) We aim to
                                    use phone cases as an authenticity
                                    certificate for your purchased NFTs.
                                  </li>
                                  <br/>
                                  <li className="butteyes-light-text" style={{color:"black"}}>
                                   - Every OpenSea sale period customer gets a 
                                    free reference code to be included in the
                                    next ButtEyes Team related market sale.
                                  </li>
                                  <br/>
                                  <li className="butteyes-light-text" style={{color:"black"}}>
                                   - Each OpenSea sale period customer is
                                    rewarded with the reference codes required
                                    to be included in the market sale. Owners of
                                    the gold version are entitled to 10 referral
                                    codes, and owners of the silver version are
                                    entitled to 2 referral codes. With these
                                    codes, you can bring your loved ones in or
                                    you can just sell them to people who want to
                                    join the club.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div id="carouselExampleControls" className="carousel slide" style={{padding:"100px", marginBottom:"165px"}}>
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
      </div>
    </Fragment>
  );
}

export default About;
