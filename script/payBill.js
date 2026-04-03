document.getElementById("pay-btn").addEventListener("click", function(){

    const type = getValueFromInput("bill-type");
    const number = getValueFromInput("bill-number");
    const amount = Number(getValueFromInput("bill-amount"));
    const pin = getValueFromInput("bill-pin");

    if(number.length < 5){
        alert("Invalid account number");
        return;
    }

    if(isNaN(amount) || amount <= 0){
        alert("Invalid amount");
        return;
    }

    const balance = getBalance();

    if(amount > balance){
        alert("Not enough balance");
        return;
    }

    if(pin === "1234"){
        const newBalance = balance - amount;
        setBalance(newBalance);
        addTransaction(`${type} bill ৳${amount}`);

        alert(`${type} bill paid ৳${amount} ✅`);
    } else{
        alert("Invalid pin");
    }

});