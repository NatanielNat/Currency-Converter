let formElement = document.querySelector(".js-form");
let selectElement = document.querySelector(".js-select");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let euro = 4.68
let usd = 4.52
let peso = 0.027
let rubel = 1.77

formElement.addEventListener("input", () => {
    let amount = amountElement.value;
    let currency = selectElement.value;
    let currencyHolder = document.querySelector(".js-currencyNow")

    switch (currency) {
        case "EURO":
            result = amount / euro;
            break;
        case "USD":
            result = amount / usd;
            break;
        case "PESO":
            result = amount / peso;
            break;
        case "RUBEL":
            result = amount / rubel;
            break;
    }
    currencyHolder.innerText = `${currency}`
    resultElement.innerText = `${result.toFixed(2)}`;
});
