window.onload = function () {
  // News data
  const newsItems = [
    {
      title: "Financial News",
      description:
        "Global markets reacted to the latest inflation data, with stocks fluctuating as investors assessed the potential impact on interest rates. Energy prices surged due to supply concerns, while tech shares faced pressure amid mixed earnings reports from major companies.",
      image:
        "https://www.figma.com/file/bb9ySqMenKDyNdrNnueXMA/image/e88be03da7215a75373b8d342cf9cee755323cec",
      category: "finance",
    },
    {
      title:
        "UPI faces outage, NPCI reports intermittent technical issues with network",
      description:
        "Third-party apps said that they faced issues with NPCI after the initial outages were reported on their app.",
      image:
        "https://www.figma.com/file/bb9ySqMenKDyNdrNnueXMA/image/e88be03da7215a75373b8d342cf9cee755323cec",
      category: "technology",
    },
    {
      title:
        "3-month T-bill cutoff set higher than 1-year, inverted yield curve",
      description:
        "The cutoff yield on 3-month T-bill was 7.10% higher due to fund demand from mutual funds, said dealers.",
      image:
        "https://www.figma.com/file/bb9ySqMenKDyNdrNnueXMA/image/e88be03da7215a75373b8d342cf9cee755323cec",
      category: "finance",
    },
    {
      title:
        "No major lapses found in gold loan portfolios of PSBs after audit: FM",
      description:
        "Sitharaman was replying to the discussion on the Banking Laws (Amendment) Bill, 2024. Later, the Rajya Sabha passed the Bill by voice vote.",
      image:
        "https://www.figma.com/file/bb9ySqMenKDyNdrNnueXMA/image/e88be03da7215a75373b8d342cf9cee755323cec",
      category: "finance",
    },
    {
      title:
        "RBI allows standalone primary dealers to participate in all repo operations",
      description:
        "Earlier SPDs were permitted to participate in all overnight liquidity management operations, including the Marginal Standing Facility.",
      image:
        "https://www.figma.com/file/bb9ySqMenKDyNdrNnueXMA/image/e88be03da7215a75373b8d342cf9cee755323cec",
      category: "finance",
    },
    {
      title: "EU considers new tech regulations",
      description:
        "The European Union is considering new regulations for tech giants to address concerns about data privacy and competition.",
      image:
        "https://www.figma.com/file/bb9ySqMenKDyNdrNnueXMA/image/e88be03da7215a75373b8d342cf9cee755323cec",
      category: "technology",
    },
    {
      title: "Healthcare innovation showcase reveals promising treatments",
      description:
        "A recent healthcare innovation showcase revealed several promising new treatments for chronic conditions.",
      image:
        "https://www.figma.com/file/bb9ySqMenKDyNdrNnueXMA/image/e88be03da7215a75373b8d342cf9cee755323cec",
      category: "health",
    },
    {
      title: "Climate summit concludes with new agreements",
      description:
        "The international climate summit concluded with several nations signing new agreements to reduce carbon emissions by 2030.",
      image:
        "https://www.figma.com/file/bb9ySqMenKDyNdrNnueXMA/image/e88be03da7215a75373b8d342cf9cee755323cec",
      category: "environment",
    },
  ];

  console.log("DOM fully loaded and parsed");
  // DOM elements
  const carousel = document.getElementById("news-carousel");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const viewAllBtn = document.getElementById("view-all");

  // Populate carousel with news cards
  function populateCarousel() {
    newsItems.forEach((item) => {
      const card = document.createElement("div");
      card.className =
        "flex-none w-64 md:w-72 bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105";

      card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" class="w-full h-40 object-cover">
    <div class="p-4">
      <h3 class="font-bold text-gray-800 mb-2">${item.title}</h3>
      <p class="text-gray-600 text-sm line-clamp-3">${item.description}</p>
    </div>
  `;

      carousel.appendChild(card);
    });
  }

  // Initialize the carousel
  //   window.onload = function () {
  // console.log("DOM fully loaded and parsed");
  populateCarousel();
  //   };

  // Current position and slide width calculations
  let position = 0;
  const cardWidth = 288; // 72rem (w-72) = 288px
  const cardsToShow = Math.floor(carousel.clientWidth / cardWidth);
  const maxPosition = (newsItems.length - cardsToShow) * cardWidth;

  // Navigation functions
  function updateCarousel() {
    carousel.scrollTo({
      left: position,
      behavior: "smooth",
    });
  }

  prevBtn.addEventListener("click", () => {
    position = Math.max(0, position - cardWidth);
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    position = Math.min(maxPosition, position + cardWidth);
    updateCarousel();
  });

  // View all button event
  viewAllBtn.addEventListener("click", () => {
    alert("View all news clicked! This would navigate to the full news page.");
  });

  // Add keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      position = Math.max(0, position - cardWidth);
      updateCarousel();
    } else if (e.key === "ArrowRight") {
      position = Math.min(maxPosition, position + cardWidth);
      updateCarousel();
    }
  });

  // Auto-scroll functionality
  let autoScrollInterval;

  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (position >= maxPosition) {
        position = 0;
      } else {
        position += cardWidth;
      }
      updateCarousel();
    }, 5000); // Change slide every 5 seconds
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // Start auto-scroll on page load
  startAutoScroll();

  // Pause auto-scroll when user interacts with carousel
  carousel.addEventListener("mouseenter", stopAutoScroll);
  carousel.addEventListener("touchstart", stopAutoScroll);

  // Resume auto-scroll when user stops interacting
  carousel.addEventListener("mouseleave", startAutoScroll);
  carousel.addEventListener("touchend", startAutoScroll);

  // Handle window resize
  window.addEventListener("resize", () => {
    const newCardsToShow = Math.floor(carousel.clientWidth / cardWidth);
    const newMaxPosition = (newsItems.length - newCardsToShow) * cardWidth;
    maxPosition = newMaxPosition;
    position = Math.min(position, maxPosition);
    updateCarousel();
  });

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
};
