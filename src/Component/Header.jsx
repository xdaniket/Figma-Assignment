import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div id="parent-of-header">
          <div id="parents-child">
            <div id="list-item">
              <div>
                <img id="logo" src="src/Images/Frame 8.svg" alt="logo" />
              </div>

              <div id="li-item">
                <li>Browse Fundraisers</li>
                <li>How It Works</li>
                <li>How It Works</li>
                <li>Search</li>
              </div>
            </div>
            <div id="button-div">
              <button id="btn-start">Start a Fundraiser</button>
              <button id="sign-in">Sign In</button>
            </div>
          </div>
        </div>
        <div className="header">
          <h2>Raising Funds was never this easy. Start a</h2>
          <h2 className="head-content">fundraiser in 5 minutes!</h2>
        </div>
      </>
    );
  }
}
export default Header;
