import React, { Fragment } from "react";
// import "../assets/css/blk-design-system.css";
import WehavePurpose from "../assets/img/Wehavepurpose.PNG";
import ButtonImgOne from "../assets/img/buttonImg/1.png";
import ButtonImgTwo from "../assets/img/buttonImg/2.png";
import Diamond from "../assets/img/800.png";
import Silver from "../assets/img/565.png";
import Gold from "../assets/img/957.png";
import Bronze from "../assets/img/1115.png";

function Home() {
  return (
    <Fragment>
      <div className="page-header" style={{ backgroundColor: "#eee22a" }}>
        <div className="section blogs-2" id="blogs-2">
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-12">
                {" "}
                <div className="button-image">
                  <a href="https://mintapp.vercel.app/">
                    <img className="img-front" src={ButtonImgOne} />
                    <img className="img-top" src={ButtonImgTwo} />
                  </a>
                </div>
              </div>
              <div className="col-12">
                {" "}
                <img src={WehavePurpose} alt="We Actually have a Purpose" />
              </div>
            </div>

            <br />
            <div className="row">
              <div className="col-lg-3">
                <div className="card card-blog ">
                  <div className="full-background">
                    <img src={Diamond} />
                  </div>
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6
                        className="card-category"
                        style={{ fontSize: "18px", color: "black" }}
                      >
                        ButtEyes #800
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="card card-blog card-background"
                  data-animation="zooming"
                >
                  <div className="full-background">
                    <img src={Gold} />
                  </div>
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6
                        className="card-category"
                        style={{ fontSize: "18px", color: "black" }}
                      >
                        ButtEyes #565
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="card card-blog card-background"
                  data-animation="zooming"
                >
                  <div className="full-background">
                    <img src={Silver} />
                  </div>
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6
                        className="card-category"
                        style={{ fontSize: "18px", color: "black" }}
                      >
                        ButtEyes #957
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="card card-blog card-background"
                  data-animation="zooming"
                >
                  <div className="full-background">
                    <img src={Bronze} />
                  </div>
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6
                        className="card-category"
                        style={{ fontSize: "18px", color: "black" }}
                      >
                        ButtEyes #1115
                      </h6>
                    </div>
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

export default Home;
