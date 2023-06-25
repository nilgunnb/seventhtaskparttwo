let menu = document.querySelector("#menu")
menu.onclick = function (e){
  e.preventDefault();
  document.querySelector("#mySidenav").style.width = "100%"
  console.log("salam")
}

function closeNav(){
    document.querySelector("#mySidenav").style.width = "0"
}