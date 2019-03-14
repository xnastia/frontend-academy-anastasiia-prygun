function showSearchDropdown() {
    document.getElementById("search-dropdown").style.display="block";
    $.getJSON( "jsons/searchList.json", function( data ) {
      
      $.each( data, function(key, val ) {
        val=val.option;
        document.getElementById("search-dropdown").innerHTML+="<option>"+val+"</option>";
      });
  }
  );    
  }

  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.logo-bar-btn')) {
      var dropdowns = document.getElementsByClassName("search-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display=="block") {
          openDropdown.style.display="none";
        }
      }
    }
  }