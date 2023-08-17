const express = require('express');
const app = express();
const PORT = 3000;

const customers = [
    {
        "name": "Will",
        "industry": "music"
    },
    {
        "name": "Will",
        "industry": "music"
    },
    {
        "name": "Will",
        "industry": "music"
    }
]; 

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.get('/api/customers', (req, res) => {
    res.send({"customers": customers});
});

app.post('/', (req, res) => {
    res.send('This is a post request');
});

app.listen(PORT, () => {
   console.log('App listening on port ' + PORT); 
});