console.log("JS loaded");






document.addEventListener("click", function () {

  document.getElementById("login-btn").addEventListener("click", function () {

    // get the mobile number value
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // get the pin input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    // match pin and mobile number
  if (contactNumber == "01805222906" && pin === "1234") {
    alert("login successful");
    window.location.assign("home.html");
} else {
    alert("Login Failed");
    return ;
}

  });

});