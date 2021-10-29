const express = require("express");
const app = express();

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

const portNumber = 8000;

app.listen(8000, ()=>console.log(`Server connected on port ${portNumber}`))
