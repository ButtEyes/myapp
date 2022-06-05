import React, { Fragment } from "react";
// import "../assets/css/blk-design-system.css";
import Logooo from "../assets/img/logo.png";
import Diamond from "../assets/img/800.png";
import Silver from "../assets/img/565.png";
import Gold from "../assets/img/957.png";
import Bronze from "../assets/img/1115.png";

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
                      <h6 className="card-category" style={{fontSize:"18px", color:"black"}}>ButtEyes #800</h6>
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
                    <h6 className="card-category" style={{fontSize:"18px", color:"black"}}>ButtEyes #565</h6>

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
                    <h6 className="card-category" style={{fontSize:"18px", color:"black"}}>ButtEyes #957</h6>

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
                    <h6 className="card-category" style={{fontSize:"18px", color:"black"}}>ButtEyes #1115</h6>

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
