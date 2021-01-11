<h2><strong>About</strong></h2>

This code creates a video chat app with webRTC using peerJS.

peerJS controls sending and receiving of video stream to/from peers with
webRTC where as socket.io allows distinct users to share their userId and 
broadcast signals through socket.

<h2><strong>How to run</strong></h2>


    node server.js


This will start a server with port number 3000.

You can then go to the browser and open localhost:3000.

This will automatically open with default room name => localhost:3000/default.

Open a new browser and join localhost:3000 again, then it will allow you to have video chat.

You can create any room number and join it by entering : localhost:3000/roomId



<strong>Reference</strong>

https://socket.io/docs/v3

https://peerjs.com/

https://www.youtube.com/watch?v=DvlyzDZDEq4&ab_channel=WebDevSimplified
