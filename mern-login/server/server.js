const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true,useUnifiedTopology: true ,useCreateIndex:true});

app.use('/api/v1/auth',require('./routes/auth.js'))

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})