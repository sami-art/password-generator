const empty = "";
const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*~";

const plength = document.getElementById("p-lenght");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", () => {
    let initialpassword = empty;
    (upperCase.checked) ? initialpassword += ucase : "";
    (lowerCase.checked) ? initialpassword += lcase : "";
    (pNumber.checked) ? initialpassword += number : "";
    (pSymbol.checked) ? initialpassword += symbol : "";
    
    password.value  = generatePassword(plength.value , initialpassword)
    
});
function generatePassword(l, initialpassword){
    let pass = "";
    for(let i = 0; i<l; i++){
        pass += initialpassword.charAt(Math.floor(Math.random() * 
        initialpassword.length ));
    }
    return pass;
}

    //Copying password to clipboard
    const copy = document.getElementById("copy");
    copy.addEventListener("click", () => {
        if( password.value == ""){
            alert("Please Generate password first");
        }
        else{
            password.select();
            document.execCommand("copy");
            alert("Password copied successfully!"); 
        }
    })
