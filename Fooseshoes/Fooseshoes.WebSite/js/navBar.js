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
    if (document.getElementById("products-page").offsetWidth > 768) {
        document.getElementById("products-page").style.display = "block";
    }    
    document.getElementById("wrapper").classList.add("wrapper");
    document.getElementById("text-wrapper").classList.add("text-wrapper");
    document.getElementById("price").classList.add("product-price");
    document.getElementById("icon-bar").style.display = "none";
    var activeSlide = document.getElementsByClassName("slides-active")[0];
    activeSlide.classList.add("product-slide");
    activeSlide.classList.remove("slides-active");
}

function onHomeBtnClick() {
    onNavBarBtnClick("home");
    document.getElementById("icon-bar").style.display = "flex";
    document.getElementById("slider").style.display = "flex";
    document.getElementById("special-offers-bar").style.display = "flex";
    document.getElementById("shop-by").style.display = "none";
    document.getElementById("home-products").style.display = "block";
    document.getElementById("products-page").style.display = "none";
    document.getElementById("new-arrivals-items").innerHTML = "";
    document.getElementById("best-sellers").innerHTML = "";
    document.getElementById("wrapper").classList.remove("wrapper");
    document.getElementById("text-wrapper").classList.remove("text-wrapper");
    document.getElementById("price").classList.remove("product-price");
    buildItemsList("new-arrivals-items", "jsons/newArrivals.json", 3);
    buildItemsList("best-sellers", "jsons/bestSellers.json", 3);
    var activeSlide = document.getElementsByClassName("product-slide")[0];
    activeSlide.classList.add("slides-active");
    activeSlide.classList.remove("product-slide");
}