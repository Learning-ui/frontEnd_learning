// currency exchange

var currency1 = 100;
var currency2 = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currency2 = convertCurrency(currency1, exchangeRate);

console.log(currency2);