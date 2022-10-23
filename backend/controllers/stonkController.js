require('dotenv').config()
const request = require('request');
var tickers = ['IBM', 'AAPL', 'TSLA', 'WMT', 'AMZN', 'GOOG', 'GOOGL', 'BLK']

// list of stonks
const getStonks = async (req,res) => {
  /*
  if (tickers.length > 1) {
    array.sort((a, b) => 0.5 - Math.random());
  }
  */

  console.log(req)

  const tdurl = 'https://api.twelvedata.com/price?symbol=' + tickers.at(-1) + '&apikey=' + process.env.API_KEY.toString();
  let tick = tickers.at(-1)
  tickers.pop()
  console.log('Tickers: ', tickers)
  
  var apidata;
  request.get({
    url: tdurl,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
      apidata = data;
    }

  });

  res.json(apidata)
  
}

module.exports = getStonks

process.env