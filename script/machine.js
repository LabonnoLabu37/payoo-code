console.log("Machine.js added")

// machine ta id er input value ta dibe (id  -->   value)

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input . value ;
    console.log(id, value);
    return value;
}
