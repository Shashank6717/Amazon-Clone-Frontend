document.addEventListener("DOMContentLoaded", function () {
  const allButton = document.querySelector(".all");
  const panelOps = document.querySelector(".panelops");
  let isOpen = false;

  allButton.addEventListener("click", function (e) {
    e.preventDefault();
    isOpen = !isOpen;
    panelOps.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!allButton.contains(e.target) && !panelOps.contains(e.target)) {
      isOpen = false;
      panelOps.classList.remove("active");
    }
  });

  // Close dropdown when window is resized above mobile breakpoint
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      isOpen = false;
      panelOps.classList.remove("active");
    }
  });
});
