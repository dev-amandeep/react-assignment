import React from 'react'

const Nft = () => {
    return (
        <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-md-12 g-0">
           
            {/* <!-- digital-ninja-content --> */}
                <div className="main-child m-20">
                  <div className="create-nft">
                    {/* <!-- make an offer button --> */}
                  <span className="default-cus-btn create-nft" >
                    Create NFT
                   </span>
                  </div>
                </div>
                {/* <!-- tabs digital --> */}
                <div className="tabs-content">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">My NFT</button>
                    </li>
                   
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">History</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className="info-section">
                        <div className="recent-inner ">
                          <div className="img-box">
                            <img alt="" src="images/defi-swap.svg" className="img-fluid" />
                          </div>
                          <div className="recent-content">
                            <h5>DeFi Swap</h5>
                              <p>by <span className="text-default">+200 users</span></p>
                          </div>
                          <div className="right-icon">
                            <a href="#"> <img alt="" src="images/right-arrow.svg" className="img-fluid" /></a>
                          </div>
                        </div>
                        <div className="recent-inner ">
                          <div className="img-box">
                            <img alt="" src="images/defi-swap.svg" className="img-fluid" />
                          </div>
                          <div className="recent-content">
                            <h5>DeFi Swap</h5>
                              <p>by <span className="text-default">+200 users</span></p>
                          </div>
                          <div className="right-icon">
                            <a href="#"> <img alt="" src="images/right-arrow.svg" className="img-fluid" /></a>
                          </div>
                        </div>
                        <div className="recent-inner ">
                          <div className="img-box">
                            <img alt="" src="images/defi-swap.svg" className="img-fluid" />
                          </div>
                          <div className="recent-content">
                            <h5>DeFi Swap</h5>
                              <p>by <span className="text-default">+200 users</span></p>
                          </div>
                          <div className="right-icon">
                            <a href="#"> <img alt="" src="images/right-arrow.svg" className="img-fluid" /></a>
                          </div>
                        </div>
                      </div>
      
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                      <div className="trade-history">
                        <div className="notify-box">
                          <img alt="" src="images/notification-icon1.svg" className="img-fluid left-side-img"/>
                          <div className="notify-content-inner">
                            <p><span className="text-dark">johdoe.near</span> bought <span className="text-dark">#72873</span> from <span className="text-default">ninjaking.near</span></p>
                            <p className="time-ago">3 days ago</p>
                          </div>
                        </div>
                        <div className="notify-box">
                          <img alt="" src="images/notification-icon1.svg" className="img-fluid left-side-img"/>
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
      </div>
      
    )
}

export default Nft
