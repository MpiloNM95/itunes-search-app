/* Connecting to React Library and My Components */

import React, { Component } from "react";
import "../App.css";

/* Defining My Album Style */

const styles = {
  album: {
    overflow: "hidden",
    width: "224px",
    height: "260px",
    borderRadius: "0 0 2px 2px",
    margin: "0px 20px 10px 5px",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.10), 0 3px 1px -2px rgba(0, 0, 0, 0.2)",
    // display: 'table'
  },
  imageContainer: {
    margin: "10px auto 0 auto",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  albumText: {
    overflow: "hidden",
    width: "210px",
    color: "#000",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "5px 1px",
    textAlign: "center",
    height: "22px",
    overflow: "hidden",
    textAlign: "center",
  },
  description: {
    fontSize: "13px",
    margin: "0",
    height: "17px",
    overflow: "hidden",
    textAlign: "center",
  },
  blockInline: {
    display: "inline-grid",
  },
  button: {
    textAlign: "center",
    width: "100px",
    margin: "0 auto",
    backgroundColor: "#C0C0C0",
    borderRadius: "3px",
    border: "1px solid #C0C0C0",
    cursor: "pointer",
    color: "#ffffff",
    fontFamily: "Arial",
    fontSize: "17px",
    padding: "11px 10px",
    textDecoration: "none",
    textShadow: "0px 1px 0px #2f6627",
    // display: 'block'
  },
};

/* Defining My Album Component */

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: JSON.parse(localStorage.getItem("favouriteList")) || [],
      title: "",
    };
  }

  updateTodo = (favouriteList) => {
    this.setState({ favouriteList });
  };

  updateLocalStorage = (todoList) => {
    localStorage.setItem("favouriteList", JSON.stringify(todoList));
  };

  render() {
    // Refresh the Page and Load Session Storage

    let handleFavClicked = (event) => {
      window.location.reload();

      // Append any Favourite Item and add them to an Array
      let favouriteItem = {};

      event.preventDefault();

      // Updating Session Storage and Storing the Favourite in the Store Favourites Variable

      let storeFavourites = [];
      console.log(favouriteItem);
      let album = this.props.album.collectionViewUrl;
      let name = this.props.album.trackName;
      let artistName = this.props.album.artistName;
      let image = this.props.album.artworkUrl100.replace("100x100", "200x300");

      const previousList = JSON.parse(localStorage.getItem("favouriteList"));
      if (previousList !== "" && Array.isArray(previousList)) {
        storeFavourites = [...previousList];
      }

      //Adding Information Relevant to the Item Returned in Search

      favouriteItem = { name, artistName, image };
      storeFavourites.push(favouriteItem);

      //Updating Local Storage

      console.log(storeFavourites);
      this.updateLocalStorage(storeFavourites);
      this.updateTodo(storeFavourites);

      alert(name);
    };

    console.log(this.props.album);

    return (
      <header style={styles.blockInline}>
        <a
          className="album-container"
          style={styles.album}
          href={this.props.album.collectionViewUrl}
        >
          {/* this.props.album.collectionViewUrl; */}
          {/* make sure you link it and pass th props for the link this.props.album.collectionViewUrl */}
          <div className="image-container" style={styles.imageContainer}>
            <img
              className="img-responsive"
              style={styles.image}
              src={this.props.album.artworkUrl100.replace("100x100", "200x300")}
              alt={this.props.album.artistName}
            />
          </div>
          <div className="album-text" style={styles.albumText}>
            <h5 className="name" style={styles.name}>
              {this.props.album.artistName}
            </h5>
            <p className="description" style={styles.description}>
              {this.props.album.trackName}
            </p>
          </div>
        </a>
        <button
          style={styles.button}
          className="myButton"
          onClick={handleFavClicked}
        >
          Add to Favourites
        </button>
      </header>
    );
  }
}

export default Album;
