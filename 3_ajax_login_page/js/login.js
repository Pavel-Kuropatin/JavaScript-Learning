const loginRequest = {login: "", password: ""};
let loginResponse = {username:"", token:""};

function login() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "http://localhost:8080/login", true);
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            getToken(this.responseText);
        } else if (this.status === 400 || 403) {
            if (loginRequest.login === "" || loginRequest.password === "") {
                document.getElementById("token").innerHTML = "Enter login and password";
            } else {
                document.getElementById("token").innerHTML = "User " + loginRequest.login + " was not found";
            }
        } else {
            document.getElementById("token").innerHTML = "Something bab happened";
        }
    }
    loginRequest.login = document.getElementById("login").value;
    loginRequest.password = document.getElementById("password").value;
    console.log(loginRequest);
    xmlHttp.send(JSON.stringify(loginRequest));
}

function getToken(data) {
    loginResponse = JSON.parse(data);
    document.getElementById("token").innerHTML = loginResponse.token;
    console.log(data);
}