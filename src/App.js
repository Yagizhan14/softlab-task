import React from "react";
import "./App.scss";
import Leftmenu from "./components/Leftmenu";
import Venues from "./components/Venues";
import { connect } from "react-redux";

const App = ({ venues }) => {
  return (
    <div className="App">
      <Leftmenu />
      <Venues venues={venues} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    venues: state.venues,
  };
};

export default connect(mapStateToProps)(App);
