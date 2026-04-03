document.getElementById("send-btn").addEventListener("click", function () {

    // receiver number
    const receiver = getValueFromInput("send-number");

    if (receiver.length != 11) {
        alert("Invalid receiver number");
        return;
    }

    // amount
    const amount = Number(getValueFromInput("send-amount"));

    if (isNaN(amount) || amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    // current balance
    const currentBalance = getBalance();

    if (amount > currentBalance) {
        alert("Not enough balance");
        return;
    }

    // pin
    const pin = getValueFromInput("send-pin");

    if (pin === "1234") {

        const newBalance = currentBalance - amount;

        alert(`৳${amount} sent to ${receiver} successfully ✅`);

        setBalance(newBalance);
        addTransaction(`Sent ৳${amount} to ${receiver} `);

        // clear input (UX improve)
        document.getElementById("send-number").value = "";
        document.getElementById("send-amount").value = "";
        document.getElementById("send-pin").value = "";

    } else {
        alert("Invalid PIN");
        return;
    }

});