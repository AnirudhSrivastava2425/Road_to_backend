const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Temp')

const app = express();
app.use(express.json());

//creating schema in same file but for projects create different files.
const tempSchema = new mongoose.Schema({
    name:String,
    class:String,
    father:String
});


// creating funciton to add data in database using server side.
async function addData(data){
    const tempModel = mongoose.model('temp1',tempSchema);
    let data1 = new tempModel(data);
    const result = await data1.save();
    console.log(result);
};


//post API request using mongoose
app.post('/', (req,res) => {
    addData(req.body);
    res.send('Welcome')
});

app.listen('5000');