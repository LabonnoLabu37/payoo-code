console.log("Machine.js added")

// machine ta id er input value ta dibe (id  -->   value)

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input . value ;
    console.log(id, value);
    return value;
}

// machine -> balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("current balance", Number(balance));
    return Number(balance);
}

function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}


// machine id >- Hide all  >- show id
function showOnly(id){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const sendMoney = document.getElementById("send-money");
    const bonus = document.getElementById("get-bonus");
    const payBill = document.getElementById("pay-bill");
    const transactions = document.getElementById("transactions");

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    sendMoney.classList.add("hidden");
    bonus.classList.add("hidden");
    payBill.classList.add("hidden");
    transactions.classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}


const transactionsData = [];

function addTransaction(text){
    transactionsData.push(text);

    const history = document.getElementById("history");

    const p = document.createElement("p");
    p.innerText = text;

    history.appendChild(p);
}



