import React, { Component } from "react";
import "./App.css";
import Home from "./Compoents/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Profile from "./Compoents/Profile/Profile";
import Digital from "./Compoents/Digital/Digital";
import Notification from "./Compoents/utlis/Notification";
import DigitalPanda from "./Compoents/DigitalPanda/DigitalPanda";
import Nft from "./Compoents/NFT/Nft";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital" element={<Digital />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/notification" element={<Notification />}/>
          <Route path="/digitalpanda" element={<DigitalPanda />}/>
          <Route path="/createnft" element={<Nft />}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
