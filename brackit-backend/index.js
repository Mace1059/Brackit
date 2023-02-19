const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const Player = require("./Player");
const { SocketAddress } = require("net");

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let playerMap = new Map();

io.on("connection", (socket) => {
  socket.join(socket.id);
  console.log(`User Connected: ${socket.id}`);
dvdzvdz
  socket.on("join_game", (name) => {
    playerMap.set(socket.id, new Player(name));
    socket.broadcast.emit("host_display_new_player", name)
    console.log(playerMap);
  });

  //answer submitted -> update score
  socket.on("answer_submit", (data) => {
    console.log("socket id: " + socket.id);
    socket.emit("player_score_updated", data);
  });
});

server.listen(5000, () => {
  console.log("SERVER IS RUNNING");
});
