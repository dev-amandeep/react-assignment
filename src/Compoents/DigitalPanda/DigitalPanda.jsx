import React from "react";

const DigitalPanda = () => {
  return (
    <div class="container-fluid g-0">
      <div class="row g-0">
        <div class="col-md-12 g-0">
          {/* <!-- digital-ninja-full-image --> */}
          <div class="full-image">
            <img alt="" src="images/digital-panda.svg" class="img-fluid full-img" />
          </div>
          {/* <!-- digital-ninja-content --> */}
          <div class="main-child m-20">
            <div class="header-content-digital">
              <h5>Digital Ninja</h5>
              <span class="text-default">#72873</span>
              <div class="box-digital">
                <img
alt=""                   src="images/notification-icon.svg"
                  class="img-fluid full-img"
                />
                <div class="owned-div">
                  <span class="text-mute">owned by</span>
                  <p>Johndoe.near</p>
                </div>
              </div>
            </div>
            {/* <!-- make an offer button --> */}
            <span
              class="make-offer"
              data-bs-toggle="modal"
              data-bs-target="#makeoffer"
            >
              Make an offer
            </span>
          </div>
          {/* <!-- tabs digital --> */}
          <div class="tabs-content">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Info
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Trade History
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="info-section">
                  <div class="content-section">
                    <div class="header-collaps">
                      <a
                        class="collaps-btn "
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <h6>Overview</h6>
                        <img
alt=""                           src="images/top-arrow.svg"
                          class="img-fluid top-side-img"
                        />
                      </a>
                    </div>
                    <div class="collapse collapse-text" id="collapseExample">
                      <p>
                        digital ninjas are a collection of 1000 unique
                        collectibles on the NEAR blockchain that serve to honor
                        and preserve art.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div class="trade-history">
                  <div class="notify-box">
                    <img
alt=""                       src="images/notification-icon1.svg"
                      class="img-fluid left-side-img"
                    />
                    <div class="notify-content-inner">
                      <p>
                        <span class="text-dark">johdoe.near</span> bought{" "}
                        <span class="text-dark">#72873</span> from{" "}
                        <span class="text-default">ninjaking.near</span>
                      </p>
                      <p class="time-ago">3 days ago</p>
                    </div>
                  </div>
                  <div class="notify-box">
                    <img
alt=""                       src="images/notification-icon1.svg"
                      class="img-fluid left-side-img"
                    />
                    <div class="notify-content-inner">
                      <p>
                        <span class="text-dark">johdoe.near</span> bought{" "}
                        <span class="text-dark">#72873</span> from{" "}
                        <span class="text-default">ninjaking.near</span>
                      </p>
                      <p class="time-ago">3 days ago</p>
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
        class="modal fade custom-modal"
        id="makeoffer"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Make Counter Offer
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <span class="text-default">#72873</span>
              <div class="sending-box">
                <h6>To</h6>
                <div class="send-content-text">
                  <img alt="" src="images/notification-icon.svg" class="img-fluid" />
                  <span class="text-default">CryptoKing.near</span>
                </div>
              </div>
              <div class="amount-section">
                <h6>Amount </h6>
                <div class="amount-section-inner">
                  <div class="near-text">
                    <input
                      type="text"
                      class="amount-near"
                      placeholder="0.000"
                    />
                  </div>
                </div>
                <div class="btn-section">
                  <span class="make-offer">Make an offer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPanda;
