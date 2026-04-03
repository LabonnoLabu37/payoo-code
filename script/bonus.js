document.getElementById("bonus-btn").addEventListener("click", function(){

    const coupon = getValueFromInput("bonus-coupon");

    if(coupon === "PAYOO100"){
        const balance = getBalance();
        const newBalance = balance + 100;

        setBalance(newBalance);

        alert("Bonus added ৳100 🎉");

    } else{
        alert("Invalid coupon");
    }

});