function getEmail() {
    var emailElement = document.getElementById("email-for-news");
    var email = emailElement.value;
    if (validateEmail(email)) {
        document.getElementById("incorrect-email").style.display = "none";
        document.getElementById("correct-email").style.display = "block";
    } else {
        document.getElementById("correct-email").style.display = "none";
        document.getElementById("incorrect-email").style.display = "block";
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}