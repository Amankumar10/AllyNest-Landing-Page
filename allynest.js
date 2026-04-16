// ================================
// MOBILE MENU TOGGLE (WORKING)
// ================================

function setupMobileMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-links");

  if (!menuToggle || !navList) return;

  // Toggle menu on click
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");

    const isOpen = navList.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when clicking any link
  const navLinks = navList.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !navList.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      navList.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ================================
// NAVBAR BACKGROUND ON SCROLL
// ================================

function setupNavbarScrollEffect() {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "#ffffff";
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    } else {
      navbar.style.background = "rgba(0, 71, 171, 0.05)";
      navbar.style.boxShadow = "none";
    }
  });
}

// ================================
// SMOOTH SCROLL (FOR ANCHORS)
// ================================

function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ================================
// INIT ALL FUNCTIONS
// ================================

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenuToggle();
  setupNavbarScrollEffect();
  setupSmoothScroll();
});

