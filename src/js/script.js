// Simple debugging - this should appear in the console
console.log("Script loaded");

// Run when the document is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");
  
  // Find the navbar element
  const navbar = document.getElementById("navbar");
  
  // If navbar exists on this page
  if (navbar) {
    console.log("Navbar found");
    
    // Add the navbar HTML
    navbar.innerHTML = `
      <div class="navBar my-5 mx-7">
        <div class="container-fluid flex items-center justify-between px-5 bg-stone-100 shadow-md rounded-3xl h-16">
          <!-- Logo Section -->
          <div class="log-sec">
            <a class="flex items-center gap-2" href="#">
              <img src="https://energizeexpressllp.com/assets/img/logoee.png" alt="logo" width="80" />
              <h1 class="text-xl text-cyan-700 font-bold">Energize Express</h1>
            </a>
          </div>

          <!-- Hamburger Menu (Mobile Only) -->
          <button class="md:hidden text-cyan-700" id="menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <!-- Navigation Menu -->
          <nav id="menu" class="hidden md:flex md:gap-7">
            <ul class="flex flex-col md:flex-row gap-7">
              <li><a href="/index.html" class="hover:underline hover:decoration-cyan-600">Home</a></li>
              <li><a href="./About-Us.html" class="hover:underline hover:decoration-cyan-600">About us</a></li>
              <li><a href="./Career.html" class="hover:underline hover:decoration-cyan-600">Careers</a></li>
              <li><a href="./Product&Service.html" class="hover:underline hover:decoration-cyan-600">Product & Services</a></li>
              <li><a href="./HealthOnSecurity.html" class="hover:underline hover:decoration-cyan-600">Health on Security</a></li>
              <li><a href="./Contact-Us.html" class="hover:underline hover:decoration-cyan-600">Contact</a></li>
            </ul>
          </nav>
        </div>

        <!-- Mobile Menu (Dropdown) -->
        <div id="mobile-menu" class="hidden md:hidden bg-stone-100 rounded-3xl shadow-md mt-3 p-5">
          <ul class="flex flex-col gap-5">
            <li><a href="/index.html" class="hover:underline hover:decoration-cyan-600">Home</a></li>
            <li><a href="/About-Us.html" class="hover:underline hover:decoration-cyan-600">About us</a></li>
            <li><a href="/Career.html" class="hover:underline hover:decoration-cyan-600">Careers</a></li>
            <li><a href="/Product&Service.html" class="hover:underline hover:decoration-cyan-600">Product & Services</a></li>
            <li><a href="/HealthOnSecurity.html" class="hover:underline hover:decoration-cyan-600">Health on Security</a></li>
            <li><a href="/Contact-Us.html" class="hover:underline hover:decoration-cyan-600">Contact</a></li>
          </ul>
        </div>
      </div>
    `;
    
    // Now that menu elements exist in DOM, add event listener
    console.log("Setting up mobile menu");
    
    // Delay slightly to ensure DOM is updated
    setTimeout(function() {
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      
      console.log("Menu button:", menuBtn);
      console.log("Mobile menu:", mobileMenu);
      
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function() {
          console.log("Menu button clicked");
          mobileMenu.classList.toggle("hidden");
        });
      } else {
        console.log("Menu elements not found");
      }
    }, 100); // Small delay to ensure DOM updates
  } else {
    console.log("No navbar element found");
  }
});