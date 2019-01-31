const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const riddle =require('./routes/api/riddle');
const answer = require('./routes/api/answer');
const app = express();

//Body parser middleware

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//DB Config
const db = require('./config/key').mongoURI;

//Connect to MongoDB
mongoose.connect(db)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req, res)=> res.send('hello world'));

//Use Route
app.use('/api/riddle',riddle);
app.use('/api/answer',answer);

const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`Server running on port ${port}`));