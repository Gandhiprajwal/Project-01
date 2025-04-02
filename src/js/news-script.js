// Simple debugging - this should appear in the console
console.log("News script loaded");

// Run when the document is ready
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  // Find the news carousel element
  const carousel = document.getElementById("news-carousel");

  // If the carousel exists on this page
  if (carousel) {
    console.log("News carousel found");

    // News data array
    // const newsItems = [
    //   { title: "Financial News", description: "Global markets reacted to the latest inflation data, with stocks fluctuating as investors assessed the potential impact on interest rates." },
    //   { title: "Tech Update", description: "A new AI model was released, outperforming previous benchmarks and opening new possibilities in automation." },
    //   { title: "Sports Headlines", description: "Local team wins the championship after a thrilling final match." },
    //   { title: "Health Alert", description: "New research in cancer therapy shows promising results, giving hope to millions." },
    //   { title: "Travel Tips", description: "Explore the best summer destinations in 2025 and make the most of your vacation." }
    // ];
    // // News data
    const newsItems = [
      {
        title: "Financial News",
        description:
          "Global markets reacted to the latest inflation data, with stocks fluctuating as investors assessed the potential impact on interest rates.",
        image:
          "https://s3-alpha-sig.figma.com/img/31d7/a8d9/1c30ff41c40ede4f8df4c1502ae46d20?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q7eJPmd9D3LclHxyHbiUyBkvuh5b3BCXQPDsoaRDrLRv5kDTJDn4Im0VnGEWgmbR0mjX2wYHjXmN8n0GI15XAj782Xycy93vMf1vcs4M4wtbh4MQ-tBRHiFxp7eG9P-GTEHzpOJKn3KoXq6KdyKYxsdLfRtrkb89snhU6d6OzGHTPtQe3w373JlF0Ab14E12NLi2FKLbBXYZaa3daSEjZotRtoc~sNN6-ivEIgRf1VDtYzlZGXXX~TQgqcOFWW-81kqb1v9hT8LuWLGdhdvPmHsiyQR2~6evlQR2Y5YL6HR3orYm8Unm9y9bFKoyR9Xh~QwWXJ6rXbq3VzHOnnhObw__",
        category: "finance",
      },
      {
        title:
          "UPI faces outage, NPCI reports intermittent technical issues with network",
        description:
          "Third-party apps said that they faced issues with NPCI after the initial outages were reported on their app.",
        image:
          "https://s3-alpha-sig.figma.com/img/e88b/e03d/a7215a75373b8d342cf9cee755323cec?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aLeGnc4NK2F91qkK82xuFQi-al397fhXDtzHyK-w5jQ2tiiLbcnlbh0RRoL3qjp30U-G9UsTSvhdoo-I00LmMtXVV7oFnttVgFLVYjQwipJec5oJ4hdN3LP-qt-fb2llati2nfTuoRegfjaM7MwlXHdFQAAwmBwsSVfujttTUG4kJI8Wp3SZ1GWY-jU6vKN6t0esB0F17avkKhkJAdq8LSxyuPGQ5z1Q34xxmxv4-f2uP4jTkLuHloUh5ELV8Dk3AwaIzmXOdtPYhmKCaWAnClx1s4CtG4LLXVpOE5KFqMddIzekt6w04WkjgNpWaJXjSjjQcqzd4G8V1IioawqdBw__",
        category: "technology",
      },
      {
        title:
          "3-month T-bill cutoff set higher than 1-year, inverted yield curve",
        description:
          "The cutoff yield on 3-month T-bill was 7.10% higher due to fund demand from mutual funds, said dealers.",
        image:
          "https://s3-alpha-sig.figma.com/img/31d7/a8d9/1c30ff41c40ede4f8df4c1502ae46d20?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q7eJPmd9D3LclHxyHbiUyBkvuh5b3BCXQPDsoaRDrLRv5kDTJDn4Im0VnGEWgmbR0mjX2wYHjXmN8n0GI15XAj782Xycy93vMf1vcs4M4wtbh4MQ-tBRHiFxp7eG9P-GTEHzpOJKn3KoXq6KdyKYxsdLfRtrkb89snhU6d6OzGHTPtQe3w373JlF0Ab14E12NLi2FKLbBXYZaa3daSEjZotRtoc~sNN6-ivEIgRf1VDtYzlZGXXX~TQgqcOFWW-81kqb1v9hT8LuWLGdhdvPmHsiyQR2~6evlQR2Y5YL6HR3orYm8Unm9y9bFKoyR9Xh~QwWXJ6rXbq3VzHOnnhObw__",
        category: "finance",
      },
      {
        title:
          "No major lapses found in gold loan portfolios of PSBs after audit: FM",
        description:
          "Sitharaman was replying to the discussion on the Banking Laws (Amendment) Bill, 2024.",
        image:
          "https://s3-alpha-sig.figma.com/img/31d7/a8d9/1c30ff41c40ede4f8df4c1502ae46d20?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q7eJPmd9D3LclHxyHbiUyBkvuh5b3BCXQPDsoaRDrLRv5kDTJDn4Im0VnGEWgmbR0mjX2wYHjXmN8n0GI15XAj782Xycy93vMf1vcs4M4wtbh4MQ-tBRHiFxp7eG9P-GTEHzpOJKn3KoXq6KdyKYxsdLfRtrkb89snhU6d6OzGHTPtQe3w373JlF0Ab14E12NLi2FKLbBXYZaa3daSEjZotRtoc~sNN6-ivEIgRf1VDtYzlZGXXX~TQgqcOFWW-81kqb1v9hT8LuWLGdhdvPmHsiyQR2~6evlQR2Y5YL6HR3orYm8Unm9y9bFKoyR9Xh~QwWXJ6rXbq3VzHOnnhObw__",
        category: "finance",
      },
      {
        title:
          "RBI allows standalone primary dealers to participate in all repo operations",
        description:
          "Earlier SPDs were permitted to participate in all overnight liquidity management operations, including the Marginal Standing Facility.",
        image:
          "https://s3-alpha-sig.figma.com/img/e88b/e03d/a7215a75373b8d342cf9cee755323cec?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aLeGnc4NK2F91qkK82xuFQi-al397fhXDtzHyK-w5jQ2tiiLbcnlbh0RRoL3qjp30U-G9UsTSvhdoo-I00LmMtXVV7oFnttVgFLVYjQwipJec5oJ4hdN3LP-qt-fb2llati2nfTuoRegfjaM7MwlXHdFQAAwmBwsSVfujttTUG4kJI8Wp3SZ1GWY-jU6vKN6t0esB0F17avkKhkJAdq8LSxyuPGQ5z1Q34xxmxv4-f2uP4jTkLuHloUh5ELV8Dk3AwaIzmXOdtPYhmKCaWAnClx1s4CtG4LLXVpOE5KFqMddIzekt6w04WkjgNpWaJXjSjjQcqzd4G8V1IioawqdBw__",
        category: "finance",
      },
    ];

    // Populate carousel with news items
    newsItems.forEach((news, index) => {
      const newsCard = document.createElement("div");
      newsCard.classList.add(
        "news-card",
        "bg-white",
        "p-4",
        "rounded-md",
        "shadow-md",
        "w-72",
        "flex-shrink-0"
      );
      newsCard.innerHTML = `
              <img src="${news.image}" alt="${news.title}" class="h-40 w-full rounded-md object-cover">
              <h3 class="text-lg font-semibold mt-2">${news.title}</h3>
              <p class="text-sm text-gray-600">${news.description}</p>
            `;
      carousel.appendChild(newsCard);
      console.log(news.title + " added to carousel")
    });

    console.log("News items added to carousel");

    // Navigation controls
    let position = 0;
    const cardWidth = 320;

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const viewAllBtn = document.getElementById("view-all");

    prevBtn.addEventListener("click", () => {
      position = Math.max(0, position - cardWidth);
      carousel.scrollTo({ left: position, behavior: "smooth" });
      console.log("Scrolled left", position);
    });

    nextBtn.addEventListener("click", () => {
      position = Math.min(
        carousel.scrollWidth - carousel.clientWidth,
        position + cardWidth
      );
      carousel.scrollTo({ left: position, behavior: "smooth" });
      console.log("Scrolled right", position);
    });

    viewAllBtn.addEventListener("click", () => {
      alert("Redirecting to full news page...");
    });
  } else {
    console.log("No news carousel element found");
  }
});

//  // Populate news carousel
//   newsData.forEach((news, index) => {
//     const newsCard = document.createElement("div");
//     newsCard.classList.add("news-card", "bg-white", "p-4", "rounded-md", "shadow-md", "w-72", "flex-shrink-0");
//     newsCard.innerHTML = `
//       <img src="${news.image}" alt="${news.title}" class="h-40 w-full rounded-md object-cover">
//       <h3 class="text-lg font-semibold mt-2">${news.title}</h3>
//       <p class="text-sm text-gray-600">${news.description}</p>
//     `;
//     carousel.appendChild(newsCard);
//   });
