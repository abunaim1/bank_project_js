
function handleDeposite(){
    var inputValue = document.getElementById("deposite-input").value;
    var convertInput = convertToNumber(inputValue);
    var depositeAmount = document.getElementById("deposite-amount").innerText;
    var convertAmount = convertToNumber(depositeAmount);
    var sum = convertAmount + convertInput;
    document.getElementById("deposite-amount").innerText = sum;

    var totalAmount = document.getElementById("total-amount").innerText;
    var convertedTotalAmount = convertToNumber(totalAmount);
    var totalSum = convertedTotalAmount + convertInput;
    document.getElementById("total-amount").innerText = totalSum;
    document.getElementById("deposite-input").value = ""
}

function handleWithdraw(){
    var withdrawInput = document.getElementById("withdraw-input").value;
    var convertWithdraw = convertToNumber(withdrawInput);
    var withdrawAmount = document.getElementById("withdraw-amount").innerText;
    var convertWithdrawAmount = convertToNumber(withdrawAmount);
    var sum = convertWithdrawAmount + convertWithdraw;
    document.getElementById("withdraw-amount").innerText = sum;
    var x = document.getElementById("total-amount").innerText
    var totalBalance = convertToNumber(x);
    var balance = totalBalance - convertWithdraw;
    document.getElementById("total-amount").innerText = balance;
    document.getElementById("withdraw-input").value = ""
}

function convertToNumber(value){
    return parseFloat(value);
}