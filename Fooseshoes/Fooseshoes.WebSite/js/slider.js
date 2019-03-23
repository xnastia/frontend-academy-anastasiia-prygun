function currentDiv(number){
    var sliderStatuses = document.getElementsByClassName("slider-status-active");
    for (var j = 0; j < sliderStatuses.length; j++) {
        sliderStatuses[j].classList.add("slider-status");
        sliderStatuses[j].classList.remove("slider-status-active");        
    }

    var sliderLegends = document.getElementsByClassName("slider-status-legend-header-active");
    for (var k = 0; k < sliderLegends.length; k++) {
        sliderLegends[k].classList.add("slider-status-legend-header");
        sliderLegends[k].classList.remove("slider-status-legend-header-active");
    }

    var slides = document.getElementsByClassName("slides-active");
    for(var i=0; i<slides.length; i++){
        slides[i].classList.add("slides");
        slides[i].classList.remove("slides-active");
    }

    sliderStatuses = document.getElementsByClassName("slider-status");
    sliderStatuses[number - 1].classList.add("slider-status-active");
    sliderLegends = document.getElementsByClassName("slider-status-legend-header");
    sliderLegends[number - 1].classList.add("slider-status-legend-header-active");
    slides = document.getElementsByClassName("slides");
    slides[number - 1].classList.add("slides-active");
}