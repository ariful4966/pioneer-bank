
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

   const currentDeposit = document.getElementById("currentDeposit").innerText; 
   const currentDepositNumber = parseFloat(currentDeposit);
   const totalDeposit = currentDepositNumber + depositeNumber;

   document.getElementById("currentDeposit").innerText = totalDeposit;
   document.getElementById("depositeAmount").value = "";

   const currentBalance = document.getElementById("currentBalance").innerText;
   const currentBalanceNumber = parseFloat(currentBalance);
   const totalBalance = currentBalanceNumber + totalDeposit;
   document.getElementById("currentBalance").innerText = totalBalance;



});