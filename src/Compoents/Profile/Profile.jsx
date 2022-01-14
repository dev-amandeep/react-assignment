import React from "react";


const Profile = () => {
  return (
    <div className="container-fluid g-0">
      <div className="row g-0">
        <div className="col-md-12 g-0">
          {/* <!-- digital-ninja-full-image --> */}
          <div className="top-bg">
            <img alt="" src="images/docu-sign.svg" className="img-fluid full-img" />
            <p
              className="share-txt"
              data-bs-toggle="modal"
              data-bs-target="#shareModal"
            >
              <img alt="" src="images/share.svg" /> <span>Share</span>
            </p>
          </div>
          {/* <!-- digital-ninja-content --> */}
          <div className="main-child">
            <div className="header-content-digital">
              <h5>Docu sign</h5>
              <p>sign smart contracts seamlessly</p>
              <span className="text-default">Utilities</span>
            </div>
          </div>
          <div className="link-wrap">
            <a href="#">
              Open <img alt="" src="images/send.svg" />
            </a>
            <p>
              <img alt="" src="images/users.svg" />
              <span>24,000+ users</span>
            </p>
          </div>
          {/* <!-- tabs digital --> */}
          <div className="tabs-content">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Details
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Activity
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="info-section">
                  <div className="content-section">
                    <div className="header-collaps">
                      <a
                        className="collaps-btn "
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <h6>Overview</h6>
                        <img alt=""
                          src="images/top-arrow.svg"
                          className="img-fluid top-side-img"
                        />
                      </a>
                    </div>
                    <div
                      className="collapse collapse-text show"
                      id="collapseExample"
                    >
                      <p>
                        it is easy to electronically sign, manage and distribute
                        all your contracts and documents safely, securely,
                        anywhere, anytime- paperlessly.{" "}
                      </p>
                      <a href="#">
                        <img alt="" src="images/link.svg" />
                        <span>https://docusignn.io</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div>
                  <span className="count-text">12 activity found </span>
                  <div className="notify-box">
                    <img alt=""
                      src="images/notification-icon1.svg"
                      className="img-fluid left-side-img"
                    />
                    <div className="notify-content-inner">
                      <p>
                        <span className="text-default">johndoe.near </span>{" "}
                        <span className="text-dark">
                          signed the contract successfully{" "}
                        </span>{" "}
                      </p>
                      <p className="time-ago">3 days ago</p>
                    </div>
                  </div>
                  <div className="notify-box">
                    <img alt=""
                      src="images/notification-icon.svg"
                      className="img-fluid left-side-img"
                    />
                    <div className="notify-content-inner">
                      <p>
                        <span className="text-default">CryptoKing.near </span>{" "}
                        <span className="text-dark">
                          requested to sign the contract{" "}
                        </span>{" "}
                      </p>
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
      <div
        className="modal fade custom-modal"
        id="shareModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Share this Experience
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="share-box">
                <input
                  type="text"
                  name=""
                  value="https://nearlabs.app/app/docu_s..."
                />
                <p>
                  <img alt="" src="images/copy.svg" /> <span>Copy link</span>
                </p>
              </div>
              <ul className="social-wrap">
                <li>
                  <a href="#">
                    <img alt="" src="images/twitter.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img alt="" src="images/redit.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img alt="" src="images/telegram.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
