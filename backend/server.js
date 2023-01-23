require('dotenv').config();
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs')

// Express app
const app = express();

// ---Middleware---

// Any request sent to the server, it attaches it and patches it to the request object
app.use(express.json())

// Logs all of the requests being sent to the server.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
// This code below handles how our server responds to certain requests

// Register all requests under this path
// app.use('/api/stonk', stonk)

app.get('/api/get_random_stonks', async (req,res) => {

    const tickers = create_stonk_list();

    console.log('Tickers: ', tickers)

    let rand_stonks = {"stonks": []};

    for(let i = 0; i < tickers.length; i++) {
        let tick = tickers.at(i).tick
        let stonk_name = tickers.at(i).name
        const request = await fetch('https://api.twelvedata.com/price?symbol=' + tick + '&apikey=' + process.env.API_KEY.toString());
        const data = await request.json();
        console.log('Curr Ticker: ', tick)
        console.log(data)
        rand_stonks.stonks.push({name : stonk_name, ticker : tick, price : data.price})
    }

    res.json(rand_stonks);
    
});

app.get('/api/get_random_stonk', async (req,res) => {

   //const tickers = create_stonk_list();
   let raw = fs.readFileSync('./assets/ticker_data.json');
   let ticker_data = JSON.parse(raw);

    const index = getRndInteger(0,20733)

    const ticker = ticker_data[index.toString()]

    const request = await fetch('https://api.twelvedata.com/price?symbol=' + ticker.tick + '&apikey=' + process.env.API_KEY.toString());
    const data = await request.json();
    let tickr = ticker.tick;

    res.json({tick : tickr, price : data.price});

});

function create_stonk_list() {
    let raw = fs.readFileSync('./assets/ticker_data.json');
    let ticker_data = JSON.parse(raw);

    let stonk_list = [];
    let keys_gen = [];

    for(let i = 0; i < 8; i++) {
        let rand_key = getRndInteger(1,20733);
        
        for(let j = 0; j < keys_gen.length; j++) {
            if(rand_key == keys_gen[j]) {
                rand_key = getRndInteger(1,20733);
            }
        }
        
        stonk_list.push(ticker_data[rand_key.toString()])

        keys_gen.push(rand_key)
    }
    return stonk_list
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



app.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT)
});

process.env;