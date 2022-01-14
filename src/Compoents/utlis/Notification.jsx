import React from "react";

const Notification = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="main-child">
            <div className="notification-section">
              <div className="notification-heading">
                <h5>Notifications</h5>
              </div>
              <div className="notification-content">
                <div className="notify-box">
                  <img alt=""
                    src="images/notification-icon.svg"
                    className="img-fluid left-side-img"
                  />
                  <div className="notify-content-inner">
                    <p>
                      <span className="text-default">CryptoKing.near</span>{" "}
                      requested to sign the contract
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
                      <span className="text-default">CryptoKing.near</span>{" "}
                      requested to sign the contract
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
                      <span className="text-default">CryptoKing.near</span>{" "}
                      requested to sign the contract{" "}
                      <span className="text-default">#72873</span>
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
                      <span className="text-default">CryptoKing.near</span>{" "}
                      requested to sign the contract
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
                      <span className="text-default">CryptoKing.near</span>{" "}
                      requested to sign the contract
                    </p>
                    <p className="time-ago">3 days ago</p>
                  </div>
                  <img alt=""
                    src="images/docu-sign.svg"
                    className="img-fluid right-side-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
