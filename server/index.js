const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", socket => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`
    });
    socket.join(user.room);
  });

  socket.on("disconnect", () => {
    console.log("User had left");
  });
});
app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
