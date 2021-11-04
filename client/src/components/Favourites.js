/* Connecting to My React Library */

import React, { Component } from "react";

/* Defining My Favourites Style */

const styles = {
  favName: {
    fontSize: "1.2em",
    padding: "10px",
    margin: "10px",
    // display: 'table'
  },
  small: {
    fontSize: "0.2em !important",
    margin: "1em",
  },
  deleteBtn: {
    textAlign: "center",
    width: "100px",
    margin: "0 auto",
    backgroundColor: "#8fcfdb",
    borderRadius: "3px",
    border: "1px solid #C0C0C0",
    cursor: "pointer",
    color: "#ffffff",
    fontFamily: "Arial",
    fontSize: "15px",
    padding: "11px 10px",
    textDecoration: "none",
    textShadow: "0px 1px 0px #2f6627",
    //margin: '0 10px'
  },
  center: {
    textAlign: "center",
    fontSize: "2.5em",
    color: "#000000",
  },
  favContainer: {
    // width: "20%"
  },
  favImg: {
    width: "100px",
  },
  favArtist: {
    fontSize: "1em",
    textAlign: "center",
  },
  favBox: {
    display: "block",
    textAlign: "center",
    // color: "#fff",
    margin: "0 auto",
    border: "3px solid #8fcfdb",
  },
};

/* Defining My Favourites Component */

class Favourites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favourites: [],
    };
  }

  returnLocalStorageData = () => {};

  componentDidMount() {
    const data = localStorage.getItem("favouriteList");

    return data
      ? this.setState({
          favourites: JSON.parse(data),
        })
      : this.setState({ favourites: [] });
  }

  render() {
    const storeFavourite = JSON.parse(localStorage.getItem("favouriteList"));

    console.log(storeFavourite);

    // Applying a method to update the favouriteList

    this.updateTodo = (favouriteList) => {
      this.setState({ favourites: favouriteList });
    };

    // // Updating Local Storage and Deleting any Card Not Needed
    this.updateLocalStorage = (favList) => {
      localStorage.setItem("favouriteList", JSON.stringify(favList));
    };

    let deleteCard = (index) => {
      console.log(index);
      storeFavourite.splice(index, 1);
      //Updating Local Storage and the Store Favourite Variable to be used in Session State

      this.updateLocalStorage(storeFavourite);
      this.updateTodo(storeFavourite);
    };

    return (
      <div style={styles.favouriteContainer}>
        <h2 style={styles.center}> Your Favourites</h2>
        {this.state.favourites.map((value, index) => (
          // if there is content inside the localStorage

          <tr key={index} style={styles.favBox}>
            <h3 style={styles.small}>Name</h3>
            <td style={styles.favName}>{value.name}</td> <br />
            <td style={styles.favArtist}>
              Artist Name: <br />
              {value.artistName}
            </td>
            <img style={styles.favImg} src={value.image} />
            <td>
              <button
                data-index={index}
                style={styles.deleteBtn}
                className="myButton"
                onClick={deleteCard}
              >
                Delete
              </button>
            </td>
          </tr>

          // <li key={index}>{value.name}</li>
        ))}
      </div>
    );
  }
}

export default Favourites;
