
var formLogin = document.getElementsByClassName("container_login");
var formRegister = document.getElementsByClassName("container_register");


function Register(){
    if(formLogin[0].style.display ===  "block")
        formLogin[0].style.display = "none";
    else
        formRegister[0].style.display = "block";
}

function back(){
    if(formLogin[0].style.display ===  "none")
        formLogin[0].style.display = "block";
    else
        formRegister[0].style.display = "none";
}