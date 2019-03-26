function onNavBarBtnClick(id) {
    var buttons = document.getElementsByClassName("nav-bar-btn-active");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("nav-bar-btn")
        buttons[i].classList.remove("nav-bar-btn-active");
    }
    document.getElementById(id).classList.add("nav-bar-btn-active");
}

function onProductsBtnClick() {
    onNavBarBtnClick("products");
    document.getElementById("slider").style.display = "none";
    document.getElementById("special-offers-bar").style.display = "none";
    document.getElementById("home-products").style.display = "none";
    document.getElementById("shop-by").style.display = "flex";
    document.getElementById("products-page").style.display = "block";
}

function onHomeBtnClick() {
    onNavBarBtnClick("home");
    document.getElementById("slider").style.display = "flex";
    document.getElementById("special-offers-bar").style.display = "flex";
    document.getElementById("shop-by").style.display = "none";
    document.getElementById("home-products").style.display = "block";
    document.getElementById("products-page").style.display = "none";
    document.getElementById("new-arrivals-items").innerHTML = "";
    document.getElementById("best-sellers").innerHTML = "";
    buildItemsList("new-arrivals-items", "jsons/newArrivals.json", 3);
    buildItemsList("best-sellers", "jsons/bestSellers.json", 3);
}