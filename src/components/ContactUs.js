import React from "react";
// import "../assets/css/blk-design-system.css";

import Discord from "../assets/img/discord.png";
import Twitter from "../assets/img/twitter.png";
import Solscan from "../assets/img/solscan.png";


function ContactUs() {
  return (
    <div className="page-header error-page header-filter" style={{overflow:"auto", backgroundColor:"#eee22a" }}>
      <div className="page-header-image"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="features-1">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 ml-auto mr-auto">
          
                
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="info info-hover">
                      <div className="icon icon-primary">
                        <a href="https://opensea.io/ButtEyesNFT" target="_blank">
                                         <img
                          className="bg-blob"
                          src={Discord}
                          style={{maxWidth:"80%"}}
                        />
                        <i className="tim-icons icon-user-run"></i>
                        </a>
         
                      </div>
                      <h4 className="info-title butteyes-bold-text" style={{color:"#020308" }}>Discord</h4>
                      <p className="description butteyes-light-text" style={{color:"#020308" }}>
                        You can reach from Opensea
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info info-hover">
                      <div className="icon icon-success">
                        <a href="#" target="_blank">
                          <img
                          className="bg-blob"
                          src={Solscan}
                          style={{maxWidth:"80%"}}
                        />
                        <i className="tim-icons icon-atom"></i>
                        </a>
                        
                      </div>
                      <h4 className="info-title butteyes-bold-text" style={{color:"#020308" }}>Solscan</h4>
                      <p className="description butteyes-light-text" style={{color:"#020308" }}>
                        You can check Contract Address
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info info-hover">
                      <div className="icon icon-warning">
                        <a href="https://twitter.com/butteyesnft" target="_blank">
                                 <img
                          className="bg-blob"
                          src={Twitter}
                          style={{maxWidth:"80%"}}
                        />
                        <i className="tim-icons icon-gift-2"></i>
                        </a>
                 
                      </div>
                      <h4 className="info-title butteyes-bold-text" style={{color:"#020308" }}>Twitter</h4>
                      <p className="description butteyes-light-text" style={{color:"#020308" }}>
                      You can reach from Twitter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-12 pt-5">
                      <i class="fas fa-envelope" style={{color:"#020308" }}> </i> 
                        <p className="text-center" style={{color:"#020308" }}> butteyesnft@gmail.com </p>             
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
