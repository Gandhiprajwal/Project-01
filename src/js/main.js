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

// // stock
// fetch("stock.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.getElementById("stock").innerHTML = data;
//   })
//   .catch((err) => console.log(err));

// // financial planning
// fetch("financial_planning.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.getElementById("financial").innerHTML = data;
//   })
//   .catch((err) => console.log(err));

// // tax
// fetch("tax.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.getElementById("tax").innerHTML = data;
//   })
//   .catch((err) => console.log(err));

// //  careers
// fetch("careers.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.getElementById("careers").innerHTML = data;
//   })
//   .catch((err) => console.log(err));

// // why us
// fetch("why-us.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.getElementById("why-us").innerHTML = data;
//   })
//   .catch((err) => console.log(err));

// services
fetch("services.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("services").innerHTML = data;
  })
  .catch((err) => console.log(err));

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("news-container");

//   fetch("news.html")
//     .then((response) => {
//       if (!response.ok) throw new Error("Network error");
//       return response.text();
//     })
//     .then((data) => {
//       container.insertAdjacentHTML("beforeend", data); // Append the HTML content
//     })
//     .catch((error) => {
//       console.error("Error loading news:", error);
//       container.innerHTML = "<p>Failed to load news content.</p>";
//     });
// });
