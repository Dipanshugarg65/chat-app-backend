
const express = require("express");
const { chats } = require("./data/data");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

require("dotenv").config();

connectDB();
const app = express();

app.use(express.json()); //To accept the json data

const corsOptions = {
  origin: '*',
}
app.use(cors(corsOptions))


app.get("/", (req, res) => {
  res.send("API is Running Succesfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3002;
const server = app.listen(3002, console.log(`Server Started on PORT ${PORT}`.yellow.bold));


// CONNECTION ESTABILISHED-----------
const io = require('socket.io')(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
  },
})


io.on("connection", (socket) => {
  console.log("connected to socket.io");

  // TO CONNECTED TO USER DATA AS THEY CAN JOIN OUR APPLICATION-----------
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    console.log("userData._id");
    socket.emit("connected");
  });

  // CONNECTION ESTABILISHED WHEN USER JOIN THE CHAT ROOM------------
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  // THIS SETUP IS FOR SHOW TYPING WHEN OTHER MEMBER TYPE SOMETHING-----
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  // CREATING SEND MESSAGE FUNCTIONALITY--------------
  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;
      // SENDING THE MESSAGE INSIDE THAT USER ROOM----------------
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });
  //closing the socket with a lot of bandwidth
  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
})