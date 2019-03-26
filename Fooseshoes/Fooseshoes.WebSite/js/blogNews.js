function blogFadeOut() {
    $("#first-enterance").fadeOut(1000);
    $("#second-enterance").fadeOut(1000);
}

function blogFadeIn() {
    $("#first-enterance").fadeIn(1000);
    $("#second-enterance").fadeIn(1000);
}

function refreshBlogNews() {
    setInterval(function () {
        blogFadeOut();
        blogFadeIn();
    }, 5000);
}