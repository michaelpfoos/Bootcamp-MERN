const mongoose = require('mongoose');

const dbName = 'jokesapi';

const connectionString = `mongodb://localhost/${dbName}`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`you are connected to the ${dbName} database`);
    })
    .catch((err)=>{
        console.log(`There was an error connecting to the ${dbName} database`);
        console.log(err);
    })