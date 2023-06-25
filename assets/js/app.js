let menu = document.querySelector("#menu");
let sidenav = document.querySelector(".sidenav");

menu.onclick = function (){
   sidenav.style.width = "100%"
}

function closeNav(){
    sidenav.style.width = "0"
}