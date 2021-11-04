/* Connecting to My React Library and Components */

import React, { Component } from "react";
import Album from "./Album";
import Favourites from "./Favourites";
import Axios from "axios";
import Dropdown from "./Dropdown";
import logo from "./logo.png";

/* Defining My Album Search Style */

const styles = {
  albumsSearch: {
    background: "#8fcfdb",
    width: "100%",
    height: "auto",
    display: "inline-block",
  },
  itunes: {
    fontSize: "2em",
    color: "#fff",
  },
  Carousel: {
    maxWidth: "300px !important",
    margin: "0 3em",
    borderRadius: "30px",
    // height: "400px"
  },
  searchContainer: {
    width: "260px",
    margin: "20px auto",
  },
  searchInput: {
    width: "100%",
    height: "40px",
    paddingLeft: "45px",
    border: "none",
    borderBottom: "1px solid #ccc",
    fontSize: "20px",
    background: "white",
  },
  searchLabel: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    height: "40px",
    lineHeight: "40px",
    left: "12px",
    fontSize: "1.4em",
    background: "black",
    color: "silver",
  },
  albumsContainer: {
    // the albums container
    display: "flex",
  },
  albums: {
    // margin: '0 auto'
    width: "90%",
    display: "flex",
  },
  logoStyle: {
    // margin: '0 auto'
    width: "100px",
    height: "50px",
    display: "flex",
  },
};

/* Defining my Album_Search Component */

class Album_Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      query: "",
    };
  }

  /**
   * Setting user input to state
   */
  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const query = this.state.query;

    if (query) {
      Axios.get(`http://localhost:3001/search/${query}`).then((response) =>
        this.setState({
          albums: response.data,
        })
      );
    }
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <header>
          <h2 style={styles.itunes}>iTunes Search</h2>
        </header>
        <img className="logoStyle" src={logo} alt="Logo" />

        <div className="albums-search" style={styles.albumsSearch}>
          <form
            onSubmit={this.onSubmit}
            id="searchbox"
            style={styles.searchContainer}
          >
            <label style={styles.searchLabel}>
              <i
                className="fa fas-search fa-3"
                aria-hidden="true"
                style={styles.searchIcon}
                onClick={this.handleClick}
              />
              <input
                type="text"
                placeholder="Enter search here.."
                search="search"
                value={this.state.query}
                style={styles.searchInput}
                onChange={this.handleChange}
              />
              <Dropdown />
            </label>
          </form>
        </div>
        <div className="albumsContainer" style={styles.albums}>
          {/* Fetch Movies and Return them or Split Screen to Add an Item to Favourites */}
          <div className="movies">
            {this.state.albums.map((album, i) => (
              <Album key={i} album={album} />
            ))}
          </div>
          <Favourites />
        </div>
      </div>
    );
  }
}

export default Album_Search;
