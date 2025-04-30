document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show the button when the user scrolls down 200px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Select all card images
  const cardImages = document.querySelectorAll(".card-img-top");

  cardImages.forEach((image) => {
    // Add event listener for mouse enter
    image.parentElement.addEventListener("mouseenter", function () {
      image.style.transition = "transform 0.3s ease";
      image.style.transform = "scale(1.1)"; // Enlarge image
    });

    // Add event listener for mouse leave
    image.parentElement.addEventListener("mouseleave", function () {
      image.style.transform = "scale(1)"; // Reset image size
    });
  });
});
