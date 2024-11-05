let username = document.querySelector('.username');
let password = document.querySelector('.password');
let btn = document.querySelector('.btn');
let btnLink = document.querySelector('.login-link');
let login = document.querySelector('.navbar-login');
let loginBtn = document.querySelector('.login-btn');
let listGroup = document.querySelector('.list-group');

let myusername = "Pratham123";
let mypassword = "123456";

let num = 0;

btn.onclick = (event) => {
    event.preventDefault();
    if (username.value==="" && password.value===""){
        console.log("No Field entered")
    }
    else if (username.value===myusername && password.value===mypassword){
        window.location.href = "/Recipe-Website/";
    }
    else {
        alert("Invalid username or password!");
    }
};

loginBtn.onclick = () => {
    if (num==0){
        listGroup.style.display = "list-item";
        num=1;
    }
    else{
        listGroup.style.display = "none";
        num=0;
    }
}