// Mobile menu toggle
function setupMobileMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.getElementById("nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
      const isExpanded = navList.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", String(isExpanded));
    });

    const navLinks = navList.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", setupMobileMenuToggle);
