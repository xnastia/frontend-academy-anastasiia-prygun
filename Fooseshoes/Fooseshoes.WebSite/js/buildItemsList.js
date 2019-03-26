function buildItemsList(id, url, showNumber) {
    var arrivals = document.getElementById(id);    
        var i=1
        $.getJSON(url, function (data) {
            $.each(data, function (key, val) {
                i++
                var shoePrice = val.price;
                var group = val.group;
                var image = val.image;
                if (group === "out of stock") {
                    group = '<div class="out-of-stock">OUT OF STOCK</div>';
                }
                if (group === "on sale") {
                    group = '<div class="sale">ON SALE!</div>';
                }

                var iconBar = '<div class="icon-bar"><a class="shoe-image-icon"><i class="fa fa-eye slider-icon">'
                + '</i></a><a class="shoe-image-icon"><i class="far fa-star slider-icon"></i></a><a class="shoe-image-icon">'
                + '<i class="glyphicon glyphicon-log-out slider-icon"></i></a><a class="shoe-image-icon">' +
                '<i class="fa fa-cart-arrow-down slider-icon"></i></a></div>';
                
                arrivals.innerHTML += '<div class="shoe-with-discription">'+
                    '<div class="shoe" style="background-image: url(\'../images/' + image + '.jpg\')">'
                    + group + '</div><div class="shoe-legend">' + iconBar +
                    '<div class="even-odd">Even&Odd</div></div>' +
                    '<div class="shoe-price">$' + shoePrice + '</div></div>';
                if (showNumber === i-1) {
                        return false;
                    }                
            });
        }
      );
}

function inlineView() {
    var shoes = document.getElementsByClassName("shoe-with-discription");
        for(var i=0; i<shoes.length; i++){
            shoes[i].classList.add("shoe-with-discription-column-view");
            shoes[i].classList.remove("shoe-with-discription");
        }
}

function blockView() {
    document.getElementById("products-items").innerHTML="";
    buildItemsList("products-items", "jsons/products.json")
}
