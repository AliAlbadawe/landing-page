/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 */

// Build menu

let navBar = document.getElementById("navbar__list");
/*used All to return variable as a NodeList to count it's number*/
/* Looped over the NodeList and added text with dynamic numbers to make it easy for future adding content*/
let sections = document.querySelectorAll("section");
function addNavList() {
  for (i = 1; i <= sections.length; i++) {
    let navBarList = document.createElement("li");
    navBarList.innerHTML = `<a class=menu__link href=#section${i}>Section${i}</a>`;
    navBar.appendChild(navBarList);
  }
}
/*Listening for DOM loading and then firing the event to increase page performance and minimize repaint and reflow*/
document.addEventListener("DOMContentLoaded", addNavList());

// Add class 'active' to section when near top of viewport
let viewCheck = function () {
  for (i = 0; i < sections.length; i++) {
    let sec = sections[i];
    let bound = sec.getBoundingClientRect();
    if (bound.top >= -100 && bound.bottom <= window.innerHeight) {
      sec.classList.add("your-active-class");
    } else {
      sec.classList.remove("your-active-class");
    }
  }
};
window.addEventListener("scroll", viewCheck);

//Added "to top" button
let toTopBtn = document.querySelector(".to-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    toTopBtn.classList.add("get");
  } else {
    toTopBtn.classList.remove("get");
  }
});

toTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

//Added event for hiding navigation bar when scrolling down and show when scrolling up
let navParent = document.querySelector(".page__header");
console.log(navParent);
let scrollNow = window.scrollY;
window.onscroll = () => {
  let scroll2 = window.scrollY;
  if (scrollNow < scroll2 && window.scrollY > 450) {
    navParent.classList.add("get");
  } else {
    navParent.classList.remove("get");
  }
  scrollNow = scroll2;
};
