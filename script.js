let loginContainer = document.getElementById("loginContainer");
let btnLogin = document.getElementById("btnLogin");
let esci = document.getElementById("esci");
let btnEsci = document.getElementById("btnEsci");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

function onClickLogin(){
    loginContainer.style.visibility = "hidden";
     esci.style.visibility = "visible";
     localStorage.setItem("login", true)
 
}
 
 
function onClickLogout(){
    esci.style.visibility = "hidden";
    loginContainer.style.visibility = "visible";
    localStorage.clear("login");
}
 
function toggleButton(){
    if(input1.value != "" && input2.value != "") btnLogin.disabled = false;
    else btnLogin.disabled = true;

}
 


document.addEventListener("DOMContentLoaded",() => {
    const isLogged = localStorage.getItem("login")
    if(isLogged) onClickLogin()
})

btnLogin.addEventListener("click",onClickLogin)
btnEsci.addEventListener("click",onClickLogout)

input1.addEventListener("keyup",toggleButton)
input2.addEventListener("keyup",toggleButton)



