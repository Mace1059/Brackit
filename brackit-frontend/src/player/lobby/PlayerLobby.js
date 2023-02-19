import React, { useState } from "react";

import {socket} from '../../shared/socket';
import JoinDisplay from "./JoinDisplay/JoinDisplay";


const PlayerLobby = () => {
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = (name) => {
    setIsJoined(true);
    console.log("name" + name);
    socket.emit("join_game", name);

  };

  return !isJoined ? (
    <JoinDisplay onSubmit={handleSubmit} />
  ) : (
    <h1>Do you see your name?</h1>
  );
};

export default PlayerLobby;
