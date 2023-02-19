import React, { useState, useEffect } from "react";

import MainHeader from "../../shared/MainHeader/MainHeader";

import "./HostLobby.css";

import { socket } from "../../shared/socket";

const backgroundColors = [
  "red",
  "orange",
  "skyblue",
  "green",
  "blueviolet",
  "deeppink",
  "goldenrod",
  "darkred",
];

let playerNameList = [
  "Jack",
  "Will",
  "JV",
  "Nate",
  "Gannon",
  "Tristan",
  "Connor",
];

const randomIndex = (array) => {
  const i = Math.floor(Math.random() * array.length);
  return i;
};

const HostLobby = () => {
  const [players, setPlayers] = useState(playerNameList);


  useEffect(() => {
    socket.on("host_display_new_player", (name) => {
      console.log(name);
      setPlayers((prevPlayers) => [...prevPlayers,name]);
    });
    return () => {
      socket.off("host_display_new_player")
    }
  }, [])





  useEffect(() => {
    console.log(players)
  }, [players]);

  return (
    <div>
      <MainHeader>
        <h3>
          Pin: <span style={{ color: "green" }}>{3000}</span>
        </h3>
        <h2 className="loading">Waiting for Players</h2>
        <button>Start Game</button>
      </MainHeader>
      <ul className="bracket-join-display">
        {players.map((player, index) => (
          <li
            style={{
              backgroundColor: backgroundColors[randomIndex(backgroundColors)],
            }}
            key={playerNameList.indexOf(player)}
          >
            {player}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HostLobby;
