function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "payment" && pass === "1234") {
        window.location.href = "payment.html";
    } else {
        alert("Invalid Login Credentials");
    }
}

function makePayment() {
    let amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        alert("Please enter valid amount");
    } else {
        window.location.href = "success.html";
    }
}

function goHome() {
    window.location.href = "index.html";
}
