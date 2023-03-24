const express = require('express');
const path = require ('path');
const clientPath = path.resolve(__dirname, '..', 'dist');
const port = 8080;


const app = express();

app.use(express.static(clientPath));


app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
})