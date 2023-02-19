import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import PlayerLobby from "./player/lobby/PlayerLobby";
import HomePage from "./homepage/HomePage";
import HostLobby from "./host/lobby/HostLobby"

import "./App.css";
import PlayerGame from "./player/game/PlayerGame";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/game" exact element={<PlayerGame/>}/>
        <Route path="/lobby" exact element={<PlayerLobby/>}/>
        <Route path="/host/game" exact element={<PlayerLobby/>}/>
        <Route path="/host/lobby" exact element={<HostLobby/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
