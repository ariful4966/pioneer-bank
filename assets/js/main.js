
//Login Button Event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

// Deposite button Event handler
const depositeBtn = document.getElementById("addDeposit");
depositeBtn.addEventListener("click", function(){
   const addedNumber =  getInputNumber("depositeAmount");


   document.getElementById("depositeAmount").value = "";

    updateSpanText("currentDeposit" , addedNumber);
   updateSpanText("currentBalance", addedNumber);

});
// withdrow Button Event Handler
const withdrowBtn = document.getElementById("addwithdrow");
withdrowBtn.addEventListener("click", function(){
    const withdrowNumber = getInputNumber("withdrowAmount");

    document.getElementById("withdrowAmount").value = "";

    updateSpanText("currentWithdrow", withdrowNumber);
    updateSpanText("currentBalance", -1 * withdrowNumber);



    /*const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const availableAmount = currentBalanceNumber - withdrowNumber;
    document.getElementById("currentBalance").innerText = availableAmount;*/
});
function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + addedNumber;
    document.getElementById(id).innerText = totalAmount;
}