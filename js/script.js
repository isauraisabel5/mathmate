//Hamburgermenu

var Hamburger = document.querySelector("#Hamburger");
Hamburger.addEventListener("click", showMenu, false);
 
Kruis = document.querySelector("#Kruis");
Kruis.addEventListener("click", hideMenu, false);
 
function showMenu(e) {
    flyoutMenu.classList.add("show");
 
    document.body.style.overflow = "hidden";
}
 
function hideMenu(e) {
    flyoutMenu.classList.remove("show");
    e.stopPropagation();
 
    document.body.style.overflow = "auto";
}       



// Dropdownmenu

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 