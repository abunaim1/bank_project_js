function handleDeposite() {
  var convertInput = getConvertedValue("deposite-input", "value");

  var convertAmount = getConvertedValue("deposite-amount", "innerText");

  var sum = convertAmount + convertInput;

  setInnertext("deposite-amount", sum);

  var convertedTotalAmount = getConvertedValue("total-amount", "innerText");

  setInnertext("total-amount", totalSum);
  document.getElementById("deposite-input").value = "";
}

function handleWithdraw() {
  var convertWithdraw = getConvertedValue("withdraw-input", "value");

  var convertWithdrawAmount = getConvertedValue("withdraw-amount", "innerText");

  var sum = convertWithdrawAmount + convertWithdraw;
  setInnertext("withdraw-amount", sum);

  var totalBalance = getConvertedValue("total-amount", "innerText");
  var balance = totalBalance - convertWithdraw;
  setInnertext("total-amount", balance);
  document.getElementById("withdraw-input").value = "";
}

function getConvertedValue(ID, element) {
  if (element == "innerText") {
    var value = document.getElementById(ID).innerText;
    return parseFloat(value);
  }
  else{
    var value = document.getElementById(ID).value;
    return parseFloat(value);
  }
}
function setInnertext(ID, value) {
  document.getElementById(ID).innerText = value;
}
