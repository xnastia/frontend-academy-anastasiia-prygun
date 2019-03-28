function getEmail() {
    var email = $("#email-for-news").val()
    if (validateEmail(email)) {
        $("#incorrect-email").hide()
        $("#correct-email").show();

        $.ajax({
            type: "POST",
            crossDomain: true,
            url: "http://localhost:8282/Home/Create",
            data: { email: email },
            dataType: "json"
        }).always(function () {
            $("#email-for-news").val()
        })
    } else {
        $("#correct-email").hide();
        $("#incorrect-email").show()
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}