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
app.use(cors()); 

//Add routes.  Placeholder will be changed to the name of the file where your routes are stored.
require("./routes/authors.routes")(app);

const portNumber = 8000;

app.listen(portNumber, ()=>console.log(`Server connected on port ${portNumber}`));