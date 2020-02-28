
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
   const depositeAmount = document.getElementById("depositeAmount").value; 
   const depositeNumber = parseFloat(depositeAmount);
});