window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  const scroll = 200;

  if (window.scrollY > 200) {
    navbar.classList.add("fixed", "top-0");
  } else {
    navbar.classList.remove("fixed", "top-0");
  }
};
