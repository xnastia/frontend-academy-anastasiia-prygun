function showDropdown(id) {
    document.getElementById(id).style.display = "block";
    //Dynamic dropdown from json
    if (id === "search-dropdown") {
        $("#search-dropdown").html("");
        $.getJSON("jsons/searchList.json", function (data) {

            $.each(data, function (key, val) {
                val = val.option;
                document.getElementById("search-dropdown").innerHTML += "<a class='a'>" + val + "</a>";
            });
        }
  );
    }    
}

function showNavDropdown() {
    document.getElementById("nav-dropdown").style.display = "block";
}
  
  // Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = $(".dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == "block") {
                openDropdown.style.display = "none";
            }
        }
        $("#search-dropdown").html("");
    }
}
