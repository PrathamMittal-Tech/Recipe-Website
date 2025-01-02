let username = document.querySelector('.username');
let password = document.querySelector('.password');
let btn = document.querySelector('.btn');
let loginPage = document.querySelector('.navbar-login');

let myusername = "cookie rookie";
let mypassword = "123456";


btn.onclick = (event) => {
    event.preventDefault();
    if (username.value==="" && password.value===""){
        console.log("No Field entered")
    }
    else if (username.value===myusername && password.value===mypassword){
        window.location.href = "index.html";

    }
    else {
        alert("Invalid username or password!");
    }
};


