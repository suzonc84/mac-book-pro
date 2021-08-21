var bestPrice = 1299;
var totalPrice = 1299;

// when any button click, those function will execute
document.getElementById('16GB-memory').addEventListener('click', function () {
    setData('memory-cost', 180);
    passData();

});

document.getElementById('8GB-memory').addEventListener('click', function () {
    setData('memory-cost', 0);
    passData();

});

document.getElementById('256GB-storage').addEventListener('click', function () {
    setData('storage-cost', 0);
    passData();
})

document.getElementById('512GB-storage').addEventListener('click', function () {
    setData('storage-cost', 100);
    passData();
})

document.getElementById('1TB-storage').addEventListener('click', function () {
    setData('storage-cost', 180);
    passData();


})

document.getElementById('Free-Charge').addEventListener('click', function () {
    setData('delivery-cost', 0);
    passData();
})

document.getElementById('extra-Charge').addEventListener('click', function () {
    setData('delivery-cost', 20);
    passData();

})

// this function is used to set the innerText
function setData(id, price) {
    document.getElementById(id).innerText = price;

}

//this function is used to reduce the code repetition
function passData() {
    var memoryCost = document.getElementById('memory-cost').innerText;
    var storageCost = document.getElementById('storage-cost').innerText;
    var deliveryCost = document.getElementById('delivery-cost').innerText;
    handleTotalCalculation(memoryCost, storageCost, deliveryCost);

}

// this function is used for main calculation
function handleTotalCalculation(memoryCost, storageCost, deliveryCost) {

    totalPrice =bestPrice + parseFloat(memoryCost) + parseFloat(storageCost)  + parseFloat(deliveryCost);
    document.getElementById('total-cost').innerText = totalPrice;
    document.getElementById('pay').innerText = totalPrice;

}

//this function is used for  promo code
document.getElementById('Apply-pomo').addEventListener("click", function () {
    var input = document.getElementById('pomo-code').value
    if (input == "stevekaku") {
        var payTotal = totalPrice - totalPrice * .2
        document.getElementById('pay').innerText = payTotal
        document.getElementById('pomo-code').value=""

    }
    else {
        document.getElementById('pay').innerText = totalPrice
    }
    
})