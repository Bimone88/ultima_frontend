import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import spotifyLogo from "./components/logo_spo.png";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar logo={spotifyLogo} />
      <HomePage />
    </div>
  );
}

export default App;
