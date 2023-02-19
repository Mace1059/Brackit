import React, { useState, useEffect } from "react";

import { socket } from "../../shared/socket";

import MainHeader from "../../shared/MainHeader/MainHeader";

const GameHeader = (props) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    socket.on("player_score_updated", (data) => {
        setScore(score + data.score);
    });
  });

  return (
    <MainHeader>
      <h2>{score}</h2>
      <h2>{props.message}</h2>
      <h2>{props.grade}</h2>
    </MainHeader>   
  );
};

export default GameHeader;
