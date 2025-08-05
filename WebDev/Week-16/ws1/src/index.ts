import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port:8080 });

wss.on('connection', (socket) =>{

    console.log("User Connected 💡");
    setInterval(()=>{
        socket.send("Current price of Solana is " + 100 * Math.random());
    },5*1000)

    socket.on('message', (e)=>{
        console.log("Yeah, you are bulll");
        
    })

})