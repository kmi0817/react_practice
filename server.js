const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // set port 5000

app.get('/', (req, res) => {
    res.send("Index Page");
});

app.get('/test', (req, res) => {
    res.send({message: 'This is for testing'});
});

// execute server
app.listen(port, () => {
    console.log(`localhost:${port} OK`);
})