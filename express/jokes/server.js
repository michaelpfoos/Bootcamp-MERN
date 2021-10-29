const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

require("./config/mongoose.config");
const jokeRoutes = require("./routes/jokes.routes")(app);

const portNumber = 8000;

app.listen(8000, ()=>console.log(`Server connected on port ${portNumber}`));