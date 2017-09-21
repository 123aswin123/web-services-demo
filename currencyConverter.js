var httpRequester = require('sync-request');
var response = httpRequester('GET', 'http://api.fixer.io/latest?base=usd');
var responseBody = JSON.parse(response.getBody());
var InrExchangeRate = parseFloat(responseBody.rates.INR);
var amount = 10;
console.log(amount + " US Dollars is equal to "+ amount * InrExchangeRate + " ₹");
