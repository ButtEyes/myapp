import React, { Fragment } from "react";
import "../assets/css/blk-design-system.css"
function Home() {
  return (
    <Fragment>
      <div className="page-header">
        <img src="../assets/img/dots.png" className="dots" />
        <img src="../assets/img/path4.png" className="path" />
        <div className="container align-items-center">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h1 className="profile-title text-left">Mike Scheinder</h1>
              <h5 className="text-on-back">01</h5>
              <p className="profile-description">
                Offices parties lasting outward nothing age few resolve.
                Impression to discretion understood to we interested he
                excellence. Him remarkably use projection collecting. Going
                about eat forty world has round miles.
              </p>
              <div className="btn-wrapper profile pt-3">
                <a
                  target="_blank"
                  href="https://twitter.com/creativetim"
                  className="btn btn-icon btn-twitter btn-round"
                  data-toggle="tooltip"
                  data-original-title="Follow us"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/creativetim"
                  className="btn btn-icon btn-facebook btn-round"
                  data-toggle="tooltip"
                  data-original-title="Like us"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  target="_blank"
                  href="https://dribbble.com/creativetim"
                  className="btn btn-icon btn-dribbble  btn-round"
                  data-toggle="tooltip"
                  data-original-title="Follow us"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <div className="card card-coin card-plain">
                <div className="card-header">
                  <img
                    src="../assets/img/mike.jpg"
                    className="img-center img-fluid rounded-circle"
                  />
                  <h4 className="title">Transactions</h4>
                </div>
                <div className="card-body">
                  <ul className="nav nav-tabs nav-tabs-primary justify-content-center">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#linka"
                      >
                        Wallet
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#linkb">
                        Send
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#linkc">
                        News
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-subcategories">
                    <div className="tab-pane active" id="linka">
                      <div className="table-responsive ps">
                        <table className="table tablesorter " id="plain-table">
                          <thead className=" text-primary">
                            <tr>
                              <th className="header">COIN</th>
                              <th className="header">AMOUNT</th>
                              <th className="header">VALUE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>BTC</td>
                              <td>7.342</td>
                              <td>48,870.75 USD</td>
                            </tr>
                            <tr>
                              <td>ETH</td>
                              <td>30.737</td>
                              <td>64,53.30 USD</td>
                            </tr>
                            <tr>
                              <td>XRP</td>
                              <td>19.242</td>
                              <td>18,354.96 USD</td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className="ps__rail-x"
                  
                        >
                          <div
                            className="ps__thumb-x"
                            tabindex="0"
                    
                          ></div>
                        </div>
                        <div
                          className="ps__rail-y"
               
                        >
                          <div
                            className="ps__thumb-y"
                            tabindex="0"
             
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="linkb">
                      <div className="row">
                        <label className="col-sm-3 col-form-label">
                          Pay to
                        </label>
                        <div className="col-sm-9">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="e.g. 1Nasd92348hU984353hfid"
                            />
                            <span className="form-text">
                              Please enter a valid address.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-sm-3 col-form-label">
                          Amount
                        </label>
                        <div className="col-sm-9">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="1.587"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-simple btn-primary btn-icon btn-round float-right"
                      >
                        <i className="tim-icons icon-send"></i>
                      </button>
                    </div>
                    <div className="tab-pane" id="linkc">
                      <div className="table-responsive ps">
                        <table className="table tablesorter " id="plain-table">
                          <thead className=" text-primary">
                            <tr>
                              <th className="header">Latest Crypto News</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>The Daily: Nexo to Pay on Stable...</td>
                            </tr>
                            <tr>
                              <td>Venezuela Begins Public of Nation...</td>
                            </tr>
                            <tr>
                              <td>PR: BitCanna – Dutch Blockchain...</td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className="ps__rail-x"

                        >
                          <div
                            className="ps__thumb-x"
                            tabindex="0"
          
                          ></div>
                        </div>
                        <div
                          className="ps__rail-y"
       
                        >
                          <div
                            className="ps__thumb-y"
                            tabindex="0"
   
                          ></div>
                        </div>
                      </div>
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
