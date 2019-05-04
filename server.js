//dependencies to run app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());

//port that the server is running on
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


//asl;jdflsdf;ladmalsdfmasansg