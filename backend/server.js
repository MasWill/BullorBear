require('dotenv').config();
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

var tickers = ['IBM', 'AAPL', 'TSLA', 'WMT', 'AMZN', 'GOOG', 'GOOGL', 'BLK'];


// Express app
const app = express();

// ---Middleware---

// Any request sent to the server, it attaches it and patches it to the request object
//app.use(express.json()) FIX THIS IF REVERTING

// Logs all of the requests being sent to the server.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
// This code below handles how our server responds to certain requests

// Register all requests under this path
// app.use('/api/stonk', stonk) FIX THIS IF REVERTING

app.get('/stonk', async (req,res) => {
    /*
    if (tickers.length > 1) {
      array.sort((a, b) => 0.5 - Math.random());
    }
    */

    const request = await fetch('https://api.twelvedata.com/price?symbol=' + tickers.at(-1) + '&apikey=' + process.env.API_KEY.toString());
    const data = await request.json();
    let tick = tickers.at(-1);
    console.log('Tickers: ', tickers)
    console.log(data)

    //const { tick , price } = data;

    res.json({tick : tick, price : data.price});


    
});


app.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT)
});

process.env;