// Navbar
fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch((err) => console.log(err));
// Main
fetch("main.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("main").innerHTML = data;
  })
  .catch((err) => console.log(err)); 
// Footer
fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((err) => console.log(err));
