import React from "react";
import "./App.scss";
import Leftmenu from "./components/Leftmenu";
import Venues from "./components/Venues";

const App = () => {
  return (
    <div className="App">
      <Leftmenu />
      <Venues />
    </div>
  );
};

export default App;
