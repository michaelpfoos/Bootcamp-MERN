const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Connect to the database
require("./config/mongoose.config");

//Use Cors to allow ports 3000 and 8000 to play nicely together
//This must be called before adding your routes
// app.use(cors({   
//     origin: "http://linuxhome:3000"     
// }))
//use this so you can make calls from anywhere.  If I use the code above
//I can only work on this from my main pc.  What if I want to access the server form somewhere else on my
//local network?
app.use(cors()) 

//Add routes
require("./routes/productmanager.routes")(app);

const portNumber = 8000;

app.listen(portNumber, ()=>console.log(`Server connected on port ${portNumber}`));