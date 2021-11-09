const mongoose = require('mongoose');

const dbName = 'authors';

const connectionString = `mongodb://localhost/${dbName}`;

mongoose.connect(connectionString, {
    useNewUrlparser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the ${dbName} database.`);
    })
    .catch((err)=>{
        console.log(`Something went wrong connectiong to the ${dbName} database`);
        console.log(err);
    })