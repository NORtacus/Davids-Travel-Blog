function navBar() {
    var x = document.getElementById("headerNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }