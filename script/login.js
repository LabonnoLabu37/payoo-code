document.getElementById("login-btn").addEventListener("click" , function () {

    // get the mobile number value
const numberInput = document.getElementById("input-number");
const contactNumber =  numberInput.value ;
console.log(contactNumber);

// get the pin input
const inputPin = document.getElementById("input-pin");
const pin = inputPin.value ;
console.log (pin);
});