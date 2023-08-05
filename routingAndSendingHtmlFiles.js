const express = require('express');
const path = require('path');

const app = express();
const filesPath = path.join(__dirname, 'files');
// console.log(filesPath);

app.get('/', (req, res) => {
    res.sendFile(filesPath+'/index.html');
})
app.get('/about', (req, res) => {
    res.sendFile(filesPath+'/about.html');
})
app.get('*', (req, res) => {
    res.sendFile(filesPath+'/404.html');
})
app.listen(5000);