const express = require("express");
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors());

//BOTH ARE NEEDED FOR POST AND PUT CALLS (i.e. where we SENS info in the request)
//This parses incoming requests with JSON payloads. Allows us to recongnize Request Object as a JSON Object.
//Without, we would get TypeErrors on our "post" calls https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

//This parses incoming requests with STRING OR ARRAYS payloads. Allows us to recongnize Request Object as a strings or arrays.
app.use(express.urlencoded({ extended: true }));

//require config
require("./config/mongoose.config");
//require routes
//ask about the (app) in code review if you don't figure out specifically what this does
//require("./routes/orders.routes")(app);
// Longhand:
const orderRoutes = require("./routes/orders.routes");
orderRoutes(app);

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

//app.listen(8000, ()=>console.log(`Server connected on port ${portNumber}`))

// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors
const io = socket(server, {
    cors: {
        //origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log('socket id: ' + socket.id);
    
    socket.on("event_from_client", data => {
        // send a message with "data" to ALL clients EXCEPT for the one that emitted the
    	//     "event_from_client" event
        socket.broadcast.emit("event_to_all_other_clients", data);
    });
});
