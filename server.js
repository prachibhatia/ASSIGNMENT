const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

//Connect to db
mongoose.connect('mongodb://localhost/userdata',{useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

//Check connection
db.once('open',function(){
    console.log("Connected to db");
})

// check db errors
db.on('error',function(err){
    console.log(err);
})

//api route
app.use('/api/user',require('./routes/apis/user'));
app.use('/api/employee',require('./routes/apis/employee'));

//Body-parser middleware
app.use(bodyParser.json());

app.use(cors());

//Start Server
app.listen(5000, function(){
    console.log("server started on port 5000")
})



