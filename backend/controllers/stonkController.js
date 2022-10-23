require('dotenv').config()
const request = require('request');
var tickers = ['IBM', 'AAPL', 'TSLA']

// list of stonks
const getStonks = async (req,res) => {
  /*
  if (tickers.length > 1) {
    array.sort((a, b) => 0.5 - Math.random());
  }
  */

  
  const url = 'https://api.twelvedata.com/price?symbol=' + tickers.at(-1).toString() + '&apikey=' + process.env.API_KEY.toString();
  tickers.pop()
  console.log('Tickers: ', tickers)

  request.get({
    url: url,
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
    }
  });
}

/*
req.get({
  url: url,
  json: true,
  headers: {'User Agent': 'request'}
}, (err,res,data) => {
  if(err) {
      console.log(err);
  } else if(res.statusCode != 200) {
      console.log('Status: ', res.statusCode)
  } else {
      console.log(data)
  }
});
*/

module.exports = getStonks

process.env