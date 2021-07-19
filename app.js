const meBtn = document.querySelector(".btn");
const homeBtn = document.querySelector(".homeBtn");
const aboutBtn = document.querySelector(".aboutBtn");
const contactBtn = document.querySelector(".contactBtn");
const projectBtn = document.querySelector(".projectBtn");
const navBar = document.querySelector(".navBar");
const myHome = document.querySelector(".myHome");
const myAbout = document.querySelector(".myAbout");
const myContact = document.querySelector(".myContact");
const myProject = document.querySelector(".myProject");
const sideBar = document.querySelector(".sideBar");
const barBtn = document.querySelector(".fa-bars");
const timeBtn = document.querySelector(".fa-times");
window.addEventListener("scroll", () => {
  const windowHieght = window.pageYOffset;
  const navHieght = navBar.getBoundingClientRect().height;
  if (windowHieght > navHieght) {
    navBar.classList.add("toggle");
  } else {
    navBar.classList.remove("toggle");
  }
});

homeBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
aboutBtn.addEventListener("click", () => {
  window.scrollTo(0, 600);
});
projectBtn.addEventListener("click", () => {
  window.scrollTo(0, 1035);
});
contactBtn.addEventListener("click", () => {
  window.scrollTo(0, 1700);
});
meBtn.addEventListener("click", () => {
  window.scrollTo(0, 600);
});

myHome.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
myAbout.addEventListener("click", () => {
  window.scrollTo(0, 600);
});
myProject.addEventListener("click", () => {
  window.scrollTo(0, 1035);
});
myContact.addEventListener("click", () => {
  window.scrollTo(0, 1700);
});
let barStatus = false;
barBtn.addEventListener("click", () => {
  if (barStatus === false) {
    sideBar.style.display = "block";
    timeBtn.style.visibility = "visible";
    barBtn.style.display = "none";
    barStatus = true;
  }
});
timeBtn.addEventListener("click", () => {
  if (barStatus === true) {
    sideBar.style.display = "none";
    timeBtn.style.visibility = "hidden";
    barBtn.style.display = "block";
    barStatus = false;
  }
});

gsap.from(".homePage h1", {
  duration: 3.5,
  x: -1000,
  ease: "power2.out",
});
gsap.from(".homePage h2", {
  duration: 3.5,
  x: -1000,
  ease: "power2.out",
  delay: 1.5,
});
gsap.from(".btn", {
  duration: 3.5,
  x: -1000,
  ease: "power2.out",
  delay: 2.5,
});
gsap.from(".fa-chevron-down", {
  duration: 3.5,
  x: -1000,
  ease: "power2.out",
  delay: 3.5,
});
