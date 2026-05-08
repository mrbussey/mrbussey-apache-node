const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (navButton && nav) {
  navButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const banner = document.querySelector(".cookie-banner");
const cookieChoice = window.localStorage.getItem("mrbussey-cookie-choice");

if (banner && !cookieChoice) {
  banner.classList.add("is-visible");
  banner.addEventListener("click", event => {
    const button = event.target.closest("[data-cookie]");
    if (!button) return;
    window.localStorage.setItem("mrbussey-cookie-choice", button.dataset.cookie);
    banner.classList.remove("is-visible");
  });
}
