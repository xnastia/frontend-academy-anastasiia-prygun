function switchLoginRegister(element) {
    var registerBtnClasses = document.getElementById("register-btn").classList;
    var loginBtnClasses = document.getElementById("login-btn").classList;
    
    if (element.id == "login-btn") {
        registerBtnClasses.remove("modal-nav-btn-active");
        registerBtnClasses.add("modal-nav-btn");
        loginBtnClasses.remove("modal-nav-btn");
        loginBtnClasses.add("modal-nav-btn-active");
        document.getElementById("login-form").style.display = "block";
        document.getElementById("register-form").style.display = "none";
        document.getElementById("terms-form").style.display = "none";
        document.getElementById("register-footer").style.display = "none";
        document.getElementById("login-footer").style.display = "block";
    }
    else{
        registerBtnClasses.remove("modal-nav-btn");
        registerBtnClasses.add("modal-nav-btn-active");
        loginBtnClasses.remove("modal-nav-btn-active");
        loginBtnClasses.add("modal-nav-btn");
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "block";
        document.getElementById("terms-form").style.display = "block";
        document.getElementById("login-footer").style.display = "none";
        document.getElementById("register-footer").style.display = "block";
        }
    }    
