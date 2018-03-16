var euro = prompt('Enter amount of EURO', 100);
var usd = prompt('Enter amount of USD', 52);

var one_euro = 33.23;
var one_dollar = 27.12;
var euroToUSD = one_euro / one_dollar;
var convertEUR = (euro * one_euro).toFixed(2);
var convertUSD = (usd * one_dollar).toFixed(2);	
var eToU = euroToUSD.toFixed(2);

console.log(euro + ' euros are equal ' + convertEUR + ' UAH, ' + usd + ' dollars are equal ' + convertUSD + ' UAH, one euro is equal ' + eToU + ' dollars.');
