const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");

app.use(cors({   
    origin: "http://linuxhome:3000"     
}));

require("./routes/family.routes")(app);

const port = 8000;
app.listen(port, ()=>console.log(`Server connected on port ${port}`));