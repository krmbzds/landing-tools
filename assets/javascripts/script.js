// Theme toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");

  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Apply initial theme
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }

  // Update icon based on current theme
  updateThemeIcon(currentTheme);

  // Theme toggle click handler
  themeToggle.addEventListener("click", function () {
    const isLightTheme = document.body.classList.contains("light-theme");
    const newTheme = isLightTheme ? "dark" : "light";

    // Update theme
    if (newTheme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }

    localStorage.setItem("theme", newTheme);

    // Update icon
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === "light") {
      // Moon icon for light theme
      themeIcon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      `;
    } else {
      // Sun icon for dark theme
      themeIcon.innerHTML = `
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      `;
    }
  }
});

// Add some interactive effects to tool cards
document.addEventListener("DOMContentLoaded", function () {
  const toolCards = document.querySelectorAll(".tool-card");

  toolCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Hover effect is now handled by CSS only
    });

    card.addEventListener("mouseleave", function () {
      // Hover effect is now handled by CSS only
    });
  });
});

// Add smooth scroll behavior
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add scroll animations for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe tool cards
  const animatedElements = document.querySelectorAll(".tool-card");

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  // Press 'T' to toggle theme
  if (e.key === "t" || e.key === "T") {
    if (!e.target.matches("input, textarea")) {
      document.getElementById("theme-toggle").click();
    }
  }

  // Press 'Escape' to return to top
  if (e.key === "Escape") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
