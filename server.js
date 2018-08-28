const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);
doit();
const io = socketIO(server);

let numberOfOnlineUsers = 0;

io.on('connection', (socket) => {
    numberOfOnlineUsers++;
    io.emit('numberOfOnlineUsers', numberOfOnlineUsers);
    
    console.log('New user connected');

    socket.on('disconnect', () => {
        numberOfOnlineUsers--;
        io.emit('numberOfOnlineUsers', numberOfOnlineUsers);
        console.log('User disconnected');
    });
});
 

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

function doit(){
    var server =  "41.39.63.112";

//Port of the Rocket.Chat server.
var serverPort = 3000;

//authToken that we got from the Rocket.Chat API
var authToken = "tCAVYvbpiKHA-WaSyg8zvXmj9ASqG0QMoAl5NghTqLY";

//The _id of the channel or group you want to listen too. See the README 
var subscribe = "d3i6XShD4dwTwHSaP";

//End of user defined variables

var DDP = require("ddp");
var login = require("ddp-login");
process.env.METEOR_TOKEN = authToken;

var ddpClient = new DDP({
  host: server,
  port: serverPort, 
  maintainCollections: true

});

ddpClient.connect(function(err) {
  if (err) throw err;

  login(ddpClient, {
    env: "METEOR_TOKEN",
    method: "token",
    retry: 5
  },

  function(error, userInfo) {
    if (error) {
      // Something went wrong... 
    } else {
      // We are now logged in, with userInfo.token as our session auth token. 
      token = userInfo.token;
      console.log("Authentication Sucessful.\n");

      // Subscribe to a message stream from a channel or group
      console.log("Attempting to subscribe to the Group/Channel now.\n");
      ddpClient.subscribe("stream-room-messages", [subscribe, false], function() {
        console.log(ddpClient.collections);
        console.log("Subscription Complete.\n");


        // Display the stream on console so we can see its working
        console.log("\nStarting live-stream of messages.:\n");
        ddpClient.on("message", function(msg) {
          console.log("Subscription Msg: " + msg);
        });
      }

      );
    }
  });
});
}