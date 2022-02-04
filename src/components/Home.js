import React, { Fragment } from "react";
// import "../assets/css/blk-design-system.css";
import Logooo from "../assets/img/logo.png";
import Diamond from "../assets/img/Diamond.png";
import Silver from "../assets/img/Silver.png";
import Gold from "../assets/img/Gold.jpg";
import Bronze from "../assets/img/Bronze.png";

function Home() {
  return (
    <Fragment>
      <div className="page-header" style={{ backgroundColor:"#eee22a" }}>
        <div className="section blogs-2" id="blogs-2"> 
          <div className="container-fluid" style={{ paddingTop: "100px" }}>

            <h1 className="butteyes-title-header" style={{ textAlign: "center" }}>
            <img src={Logooo} className="butteyes-eyes-logos" /> ButtEyes <img src={Logooo} className="butteyes-eyes-logos" />
              <br />
              <span className="butteyes-light-text" style={{fontSize:"50px", textAlign:"center", fontFamily:"Modak"}}>We actually have a purpose!!</span>
            </h1>
            

  
            <br />
            <div className="row">
              <div className="col-lg-3">
                <div className="card card-blog ">
                  <div className="full-background">
                    <img src={Diamond} />
                  </div>
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6 className="card-category" style={{fontSize:"18px", color:"black"}}>Mint Diamond Edition</h6>
                      <a href="MintingDiamond">
                        <h3 className="card-title text-default">
                          1/100 One of a kind!!
                        </h3>
                      </a>
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
                      <h6 className="card-category" style={{fontSize:"18px", color:"black"}}>Mint Gold Edition</h6>
                      <a href="javascript:;">
                        <h3 className="card-title text-default">
                          1/500 Very rare with advantages!
                        </h3>
                      </a>
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
                      <h6 className="card-category" style={{fontSize:"18px", color:"black"}}>Mint Silver Edition</h6>
                      <a href="javascript:;">
                        <h3 className="card-title text-default">
                          1/1000 Best way to showoff..
                        </h3>
                      </a>
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
                      <h6 className="card-category" style={{fontSize:"18px", color:"black"}}>Mint Bronze Edition</h6>
                      <a href="javascript:;">
                        <h3 className="card-title text-default">
                          1/3000 Gets you into the club.
                        </h3>
                      </a>
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
