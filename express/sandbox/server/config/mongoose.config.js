const mongoose = require('mongoose');
const { databaseCredentials } = require("../credentials/credentials");

const dbName = 'sandboxdb';

const username = databaseCredentials.username;
const password = databaseCredentials.password;

const connectionString = `mongodb://${username}:${password}@192.168.1.26/${dbName}`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`you ARE connected to the ${dbName} database!`)
    })
    .catch((err)=>{
        console.log(`There was an error connecting to the ${dbName} database!`);
        console.log(err);
    })

