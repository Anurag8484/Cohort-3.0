import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets: WebSocket[] = [];


wss.on('connection', (socket)=>{
    allSockets.push(socket);

    userCount++;
    console.log("User Connected  #", userCount);

    socket.on("message", (event) =>{
        console.log("Message Received " + event.toString());
        for (let i = 0;i<allSockets.length;i++){
            allSockets[i].send(event.toString() + ": Sent from the server")
        }

        setTimeout(()=>{
            socket.send(`You sent message: ${event.toString()}`)
        },1000)

        
    })
    
})