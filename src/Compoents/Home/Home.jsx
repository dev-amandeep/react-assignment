import React from "react";


const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="main-child">
            {/* <!-- search-filter --> */}
            <div className="search-filter">
              <div className="search-bar-parent">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search experiences"
                />
              </div>
              <div
                className="filter"
                data-bs-toggle="modal"
                data-bs-target="#filterModal"
              >
                <img alt="" src="images/filter.svg" className="img-fluid" />
              </div>
            </div>

            {/* <!-- recent --> */}
            <div className="recent-experience heading">
              <h4>Recent Experiences</h4>
              <div className="recent-inner ">
                <div className="img-box">
                  <img alt="" src="images/defi-swap.svg" className="img-fluid" />
                </div>
                <div className="recent-content">
                  <h5>DeFi Swap</h5>
                  <p>Swap your digital assets</p>
                  <span>+200 users</span>
                </div>
                <div className="right-icon">
                  <a href="#">
                    {" "}
                    <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="recent-inner">
                <div className="img-box">
                  <img alt="" src="images/docu-sign.svg" className="img-fluid" />
                </div>
                <div className="recent-content">
                  <h5>Docu sign</h5>
                  <p>Sign smart contracts seamlessly</p>
                  <span>+1K users</span>
                </div>
                <div className="right-icon">
                  <a href="#">
                    {" "}
                    <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- popular-category --> */}
            <div className="popular-category heading">
              <div className="title">
                <h4>Popular Categories </h4>
                <a href="#">
                  {" "}
                  <span className="text-default">See all</span>{" "}
                  <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                </a>
              </div>
              <div className="popular-inner">
                <div className="category-section bg-1">
                  <div className="img-box">
                    <img alt="" src="images/exchange.svg" className="img-fluid" />
                  </div>
                  <div className="category-content">
                    <div className="title">
                      <h5>Exchanges</h5>
                      <div className="right-icon">
                        <a href="#">
                          <img
alt=""                             src="images/colored-right.svg"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-section bg-2">
                  <div className="img-box">
                    <img alt="" src="images/games.svg" className="img-fluid" />
                  </div>
                  <div className="category-content">
                    <div className="title">
                      <h5>Games</h5>
                      <div className="right-icon">
                        <a href="#">
                          {" "}
                          <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-section bg-3">
                  <div className="img-box">
                    <img alt="" src="images/marketplace.svg" className="img-fluid" />
                  </div>
                  <div className="category-content">
                    <div className="title">
                      <h5>Marketplaces</h5>
                      <div className="right-icon">
                        <a href="#">
                          {" "}
                          <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-section bg-4">
                  <div className="img-box">
                    <img alt="" src="images/defi.svg" className="img-fluid" />
                  </div>
                  <div className="category-content">
                    <div className="title">
                      <h5>Defi</h5>
                      <div className="right-icon">
                        <a href="#">
                          {" "}
                          <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-section bg-5">
                  <div className="img-box">
                    <img alt="" src="images/collectibles.svg" className="img-fluid" />
                  </div>
                  <div className="category-content">
                    <div className="title">
                      <h5>Collectibles</h5>
                      <div className="right-icon">
                        <a href="#">
                          {" "}
                          <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-section bg-6">
                  <div className="img-box">
                    <img alt="" src="images/exchange.svg" className="img-fluid" />
                  </div>
                  <div className="category-content">
                    <div className="title">
                      <h5>Exchanges</h5>
                      <div className="right-icon">
                        <a href="#">
                          {" "}
                          <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Trending Experiences--> */}
            <div className="trending-box heading">
              <div className="title">
                <h4>Popular Categories </h4>
                <a href="#">
                  {" "}
                  <span className="text-default">See all</span>{" "}
                  <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                </a>
              </div>
              <div className="recent-inner ">
                <div className="img-box">
                  <img alt="" src="images/defi-swap.svg" className="img-fluid" />
                </div>
                <div className="recent-content">
                  <h5>DeFi Swap</h5>
                  <p>Swap your digital assets</p>
                  <span>+200 users</span>
                </div>
                <div className="right-icon">
                  <a href="#">
                    {" "}
                    <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="recent-inner ">
                <div className="img-box">
                  <img alt="" src="images/defi-swap.svg" className="img-fluid" />
                </div>
                <div className="recent-content">
                  <h5>DeFi Swap</h5>
                  <p>Swap your digital assets</p>
                  <span>+200 users</span>
                </div>
                <div className="right-icon">
                  <a href="#">
                    {" "}
                    <img alt="" src="images/right-arrow.svg" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-------- modal html here ------> */}
      <div
        className="modal fade custom-modal"
        id="filterModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Filter <span className="filter-count">2</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="filter-content">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    All Experiences
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked1"
                  />
                  <label className="form-check-label" for="flexCheckChecked1">
                    <img alt="" src="images/exchange.svg" className="img-fluid" />{" "}
                    Exchanges
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label className="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/games.svg" className="img-fluid" /> Games
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label className="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/marketplace.svg" className="img-fluid" />{" "}
                    Marketplace
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label className="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/defi.svg" className="img-fluid" /> DeFi
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label className="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/collectibles.svg" className="img-fluid" />{" "}
                    Collectibles
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label className="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/utilities.svg" className="img-fluid" /> Others
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
