import React, { useState } from "react";



const Digital = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className="container-fluid g-0">
  <div className="row g-0">
    <div className="col-md-12 g-0">
      {/* <!-- digital-ninja-full-image --> */}
      <div className="full-image">
        <img  alt="" src="images/digital-ninja.svg" className="img-fluid full-img"/>
      </div>
      {/* <!-- digital-ninja-content --> */}
          <div className="main-child m-20">
            <div className="header-content-digital">
              <h5>Digital Ninja</h5>
              <span className="text-default">#72873</span>
              <div className="box-digital">
                <img  alt="" src="images/digital-ninja2.svg" className="img-fluid full-img"/> <p>Johndoe.near</p>
              </div>
            </div>
          </div>
          {/* <!-- tabs digital --> */}
          <div className="tabs-content">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="info-section">
                  <div className="content-section">
                    <div className="header-collaps" onClick={() => setOpen(!open)}>
                      <a className="collaps-btn " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" >
                        <h6>Overview</h6>
                        <img  alt="" src="images/top-arrow.svg" className="img-fluid top-side-img"/>
                      </a>
                    </div>
                    <div className={`collapse collapse-text ${open && "show"}`} >
                      <p>digital ninjas are a collection of 1000 unique collectibles on the NEAR blockchain that serve to honor and preserve art.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="offer-section">
                  <h6>2 active offer</h6>
                  <div className="notify-box">
                    <img  alt="" src="images/notification-icon.svg" className="img-fluid left-side-img"/>
                    <div className="notify-content-inner">
                      <p><span className="text-default">CryptoKing.near</span> requested to sign the contract</p>
                      <p className="time-ago">3 days ago</p>
                      <div className="custom-btn">
                        <button className="btn btn-dark " type="button"  data-bs-toggle="modal" data-bs-target="#acceptoffer">Accept</button>
                        <button className="btn btn-dark " type="button"   data-bs-toggle="modal" data-bs-target="#makeoffer">Counter offer</button>
                        <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#rejectoffer">Reject</button>
                      </div>
                    </div>
                  </div>
                  <div className="notify-box">
                    <img  alt="" src="images/notification-icon.svg" className="img-fluid left-side-img"/>
                    <div className="notify-content-inner">
                      <p><span className="text-default">CryptoKing.near</span> requested to sign the contract</p>
                      <p className="time-ago">3 days ago</p>
                      <div className="custom-btn">
                        <button className="btn btn-dark " type="button">Accept</button>
                        <button className="btn btn-dark " type="button">Counter offer</button>
                        <button type="button" className="btn btn-outline-dark">Reject</button>
                      </div>
                    </div>
                  </div>
                  <div className="notify-box">
                    <img  alt="" src="images/notification-icon.svg" className="img-fluid left-side-img"/>
                    <div className="notify-content-inner">
                      <p><span className="text-default">CryptoKing.near</span> requested to sign the contract</p>
                      <p className="time-ago">3 days ago</p>
                      <div className="custom-btn">
                        <button className="btn btn-dark " type="button">Accept</button>
                        <button className="btn btn-dark " type="button">Counter offer</button>
                        <button type="button" className="btn btn-outline-dark">Reject</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="trade-history">
                  <div className="notify-box">
                    <img  alt="" src="images/notification-icon.svg" className="img-fluid left-side-img"/>
                    <div className="notify-content-inner">
                      <p><span className="text-dark">johdoe.near</span> bought <span className="text-dark">#72873</span> from <span className="text-default">ninjaking.near</span></p>
                      <p className="time-ago">3 days ago</p>
                    </div>
                  </div>
                  <div className="notify-box">
                    <img  alt="" src="images/notification-icon.svg" className="img-fluid left-side-img"/>
                    <div className="notify-content-inner">
                      <p><span className="text-dark">johdoe.near</span> bought <span className="text-dark">#72873</span> from <span className="text-default">ninjaking.near</span></p>
                      <p className="time-ago">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>




      {/* <!-- modal html here --> */}
  <div className="modal fade custom-modal" id="makeoffer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Make Counter Offer</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <span className="text-default">#72873</span>
          <div className="sending-box">
            <h6>To</h6>
            <div className="send-content-text">
              <img  alt="" src="images/notification-icon.svg" className="img-fluid"/>
              <span className="text-default">CryptoKing.near</span>
            </div>
          </div>
          <div className="amount-section">
            <h6>Amount </h6>
            <div className="amount-section-inner">
             <div className="near-text">
              <input type="text" className="amount-near" placeholder="0.000"/>
             </div>
            </div>
            <div className="btn-section">
              <span className="make-offer">
                Make an offer
               </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- accept offer --> */}
  <div className="modal fade custom-modal" id="rejectoffer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Reject Offer</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <span className="text-default">#72873</span>
         
          <div className="amount-section">
            <h6>Reason </h6>
            <div className="accept-dropdown-inner">
              <select className="form-control">
                <option>Not For Sale</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="btn-section">
              <span className="default-cus-btn reject-grey">
               Reject offer
               </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



      {/* <!-- reject offer --> */}
      <div
        className="modal fade custom-modal"
        id="acceptoffer"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Accept Offer
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <span className="text-default">#72873</span>
              <div className="sending-box">
                <h6>From</h6>
                <div className="send-content-text">
                  <img  alt="" src="images/notification-icon.svg" className="img-fluid" />
                  <span className="text-default">CryptoKing.near</span>
                </div>
              </div>
              <div className="amount-section">
                <div className="amount-result">
                  <h6>Amount </h6>
                  <p className="amount-result-inner">0.3647 NEAR</p>
                </div>

                <div className="btn-section">
                  <span className="default-cus-btn">Confirm & Accept Offer</span>
                </div>
                <p className="extra-agree-text">
                  by clicking confirm you must agree to homepage Terms &
                  condition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
