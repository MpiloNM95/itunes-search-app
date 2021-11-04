import React from "react";
import "./style.css";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown" style={{ background: "red", width: "200px" }}>
        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          Search Query
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a className="active" href="#Create Page">
                Music
              </a>
            </li>
            <li>
              <a href="#Manage Pages">Movies</a>
            </li>
            <li>
              <a href="#Create Ads">Audiobooks</a>
            </li>
            <li>
              <a href="#Manage Ads">eBooks</a>
            </li>
            <li>
              <a href="#Activity Logs">Podcasts</a>
            </li>
            <li>
              <a href="#Setting">Setting</a>
            </li>
            <li>
              <a href="#Log Out">Log Out</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
