var dropdownOpened;

function showDropdown(id) {
    if (dropdownOpened == true) {
        return false;
    }
    document.getElementById(id).style.display = "block";
    //Dynamic dropdown from json
    
        $(id).html("");
        $.getJSON("jsons/searchList.json", function (data) {

            $.each(data, function (key, val) {
                val = val.option;
                document.getElementById(id).innerHTML += "<a class='a'>" + val + "</a>";
            });
        }
  );
        dropdownOpened = true;
    }    


function showNavDropdown() {
    document.getElementById("nav-dropdown").style.display = "block";
    dropdownOpened = true;
}
  
  // Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (dropdownOpened == true) {
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
            $("#nav-search-dropdown").html("");
            dropdownOpened = false;
        }
    }
}
