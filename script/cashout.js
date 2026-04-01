
document.getElementById("cashout-btn").addEventListener("click", function()
{
    // // get the agent number and validate
    const cashoutNumber = getValueFromInput("cashout-number");
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
    alert("Invalid Number");
    return;
}


// // get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");
    console.log(cashoutAmount);


    // // get the current balance
const currentBalance = getBalance()


// // calculate new balance
const newBalance =  currentBalance - Number(cashoutAmount);

if(newBalance<0){
    alert("Invalid Amount");
    return;
};

// get the pin and verify
const pin = getValueFromInput("cashout-pin");
if(pin === '1234'){
    alert("cashout successfull")
    console.log(newBalance);
setBalance(newBalance);
} else{
    alert("Invalid pin");
    return;
}
});








                                                            // OTHOBA (MECHINE.JS CHARA CODE)
// document.getElementById("cashout-btn").addEventListener("click", function(){

// // get the agent number and validate
// const cashoutNumberInput =   document.getElementById("cashout-number");
// const cashoutNumber = cashoutNumberInput.value ;
// console.log(cashoutNumber);

// if(cashoutNumber.length != 11){
//     alert("Invalid Number");
//     return;
// }

// // get the amount
// const cashoutAmountInput = document.getElementById("cashout-amount");
// const cashoutAmount = cashoutAmountInput.value;
// console.log(cashoutAmount);

// // get the current balance
// const balanceElement = document.getElementById("balance");
// const balance = balanceElement.innerText;
// console.log(balance);

// // calculate new balance
// const newBalance =  Number(balance) - Number(cashoutAmount);

// if(newBalance<0){
//     alert("Invalid Amount");
//     return;
// }


// get the pin and verify
// const cashoutPinInput = document.getElementById("cashout-pin");
// const pin = cashoutPinInput.value;
// if(pin === '1234'){
//     alert("cashout successfull")
//     console.log(newBalance);
//     balanceElement.innerText = newBalance;
// } else{
//     alert("Invalid pin");
//     return;
// }
// });