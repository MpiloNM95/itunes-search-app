// Imported from react libraries and components subfolder from src folder
import React, { Component } from "react";
// Imported app cascading stylesheets
import "./App.css";
// Imported Album search from components subfolder in src folder
import Album_Search from "./components/Album_Search";

// Render the album search from components
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*  */}
        <Album_Search />
      </div>
    );
  }
};

export default App;
