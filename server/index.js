const express = require('express');
const path = require ('path');
const { Users, Trips, Weather } = require('./db/index')
const clientPath = path.resolve(__dirname, '..', 'dist');
const port = 8080;


const app = express();

app.use(express.static(clientPath));

app.get('*', (req, res) =>{
    res.sendFile(path.join(clientPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
})