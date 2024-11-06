let username = document.querySelector('.username');
let password = document.querySelector('.password');
let btn = document.querySelector('.btn');

let myusername = "Pratham123";
let mypassword = "123456";

let num = 0;

btn.onclick = (event) => {
    event.preventDefault();
    if (username.value==="" && password.value===""){
        console.log("No Field entered")
    }
    else if (username.value===myusername && password.value===mypassword){
        window.location.assign('https://prathammittal-tech.github.io/Recipe-Website/');

    }
    else {
        alert("Invalid username or password!");
    }
};
