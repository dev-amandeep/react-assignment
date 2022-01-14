import React from 'react'

const Model = () => {
    return (
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Filter <span class="filter-count">2</span>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="filter-content">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    All Experiences
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked1"
                  />
                  <label class="form-check-label" for="flexCheckChecked1">
                    <img alt="" src="images/exchange.svg" class="img-fluid" />{" "}
                    Exchanges
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label class="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/games.svg" class="img-fluid" /> Games
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label class="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/marketplace.svg" class="img-fluid" />{" "}
                    Marketplace
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label class="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/defi.svg" class="img-fluid" /> DeFi
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label class="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/collectibles.svg" class="img-fluid" />{" "}
                    Collectibles
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label class="form-check-label" for="flexCheckChecked2">
                    <img alt="" src="images/utilities.svg" class="img-fluid" /> Others
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Model
