// ============== MENU NAVBAR ================
const navlist = document.querySelector(".navlist");
const menuBtn = document.querySelector(".ri-menu-line");

menuBtn.onclick = function () {
  navlist.classList.toggle("active");
  menuBtn.classList.toggle("ri-arrow-up-double-line");
};

// ============== STICKY NAVBAR ================
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});

// ============== PORTFOLIO TABS ================

function openPortfolioTab(event, tabId) {
  const portfolioSection = document.getElementById("portfolio");
  const portfolioTabs = portfolioSection.querySelectorAll(".portfolio-tab");
  const tabContents = portfolioSection.querySelectorAll(".portfolio-tab-content");

  portfolioTabs.forEach(tab => tab.classList.remove("active"));
  tabContents.forEach(content => content.classList.remove("active-content"));

  event.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active-content");
}



// ============== SKILLS TABS ================

function openSkillsTab(event, tabId) {
  let skillsTabs = document.getElementsByClassName('skills-tab');
  let skillsContents = document.getElementsByClassName('skills-content');

  for (let tab of skillsTabs) {
    tab.classList.remove('active');
  }

  for (let content of skillsContents) {
    content.classList.remove('active-content');
  }

  event.currentTarget.classList.add('active');
  document.getElementById(tabId).classList.add('active-content');
}

// ============== CURSOR TABS ================

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});



// ============== DARK THEME================
let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = function () {
  themeBtn.classList.toggle("ri-sun-line");
  if (themeBtn.classList.contains("ri-sun-line")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

// ============== TYPED JS ================
const typed = new Typed(".multiple-text", {
  strings: ["Junior Software Developer", "Junior Front End Developer", "UI/UX Junior Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ============== SCROLL REVEAL ANIMATION ================

document.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
  distance: "200px",
  duration: 3500,
  delay: 200,
  reset: true,
});

  sr.reveal(".home-container h3", { origin: "top" });
  sr.reveal(".home-container h1", { origin: "left" });
  sr.reveal(".home-container p", { origin: "left" });
  sr.reveal(".home-container .right", { origin: "right" });
  sr.reveal(".social-icons-container", { origin: "right" });
  sr.reveal(".about-container .title", { origin: "right" });
  sr.reveal(".about-container h3", { origin: "bottom" });
  sr.reveal(".about-container p", { origin: "bottom" });
  sr.reveal(".about-container .left", { origin: "left" });
  sr.reveal(".about-container .right", { origin: "right" });
  sr.reveal(".skills-header h2", { origin: "top" });
  sr.reveal(".skills-header p", { origin: "top" });
  sr.reveal(".skills-categories .tab-1", { origin: "top" });
  sr.reveal(".skills .content-1", { origin: "left" });
  sr.reveal(".skills .content-2", { origin: "right" });
  sr.reveal(".certificate-header h2", { origin: "top" });
  sr.reveal(".certificate .certificate-container", { origin: "left" });
  sr.reveal(".portfolio-container", { origin: "bottom" });
  sr.reveal(".portfolio .title h2", { origin: "top" });
  sr.reveal(".portfolio-buttons", { origin: "left" });
  sr.reveal(".contact .title", { origin: "top" });
  sr.reveal(".contact .row .box", { origin: "right" });
  sr.reveal(".contact .row .contact-form", { origin: "left" });


});


// ============== CERTIFICATE SLIDE ================

document.addEventListener("DOMContentLoaded", function () {
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  next.addEventListener("click", function () {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  });

  prev.addEventListener("click", function () {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  });
});
