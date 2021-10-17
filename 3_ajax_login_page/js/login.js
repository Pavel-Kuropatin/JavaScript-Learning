function login() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "http://localhost:8080/login", true);
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            getToken(this.responseText);
        } else if (this.status === 400) {
            if (login === "" || password === "") {
                document.getElementById("token").innerHTML = "Enter login and password";
            } else {
                document.getElementById("token").innerHTML = "User " + login + " was not found";
            }
        } else {
            document.getElementById("token").innerHTML = "Something bab happened";
        }
    }
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    console.log(login);
    console.log(password);
    const params = {
        "login": login,
        "password": password
    }
    console.log(params);
    xmlHttp.send(JSON.stringify(params));
}

function getToken(data) {
    const jwtTokenResponse = JSON.parse(data);
    document.getElementById("token").innerHTML = jwtTokenResponse.token;
    console.log(data);
}