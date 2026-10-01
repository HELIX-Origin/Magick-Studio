'use strict';

// page navigation (based on the vCard template)
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const showPage = function (name) {
  let found = false;

  for (let i = 0; i < pages.length; i++) {
    const isActive = pages[i].dataset.page === name;
    pages[i].classList.toggle("active", isActive);
    if (isActive) found = true;
  }

  if (!found) return false;

  for (let i = 0; i < navigationLinks.length; i++) {
    const target = navigationLinks[i].getAttribute("href").slice(1);
    navigationLinks[i].classList.toggle("active", target === name);
  }

  return true;
};

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    const name = this.getAttribute("href").slice(1);
    showPage(name);
    history.replaceState(null, "", "#" + name);
    window.scrollTo(0, 0);
  });
}

if (window.location.hash && !showPage(window.location.hash.slice(1))) {
  showPage("about");
}
