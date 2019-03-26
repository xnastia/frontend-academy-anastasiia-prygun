function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


window.onload = (function () {

    var tweet = document.getElementById("tweet");
    var id = tweet.getAttribute("tweetID");

    twttr.widgets.createTweet(
      id, tweet,
      {
          conversation: 'none',    // or all
          cards: 'hidden',  // or visible
          linkColor: '#57c5a0', // default is blue
          theme: 'dark'    // or dark
      })
    .then(function (el) {
        el.contentDocument.querySelector(".footer").style.display = "none";
    });

});
