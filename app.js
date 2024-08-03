document.addEventListener("scroll", () => {
  const header = document.querySelector("nav");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
function showSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "none";
}

//light theme
const theme = document.querySelector("#theme");

theme.addEventListener("click", () => {
  console.log("hello");
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    theme.innerHTML = "&#9789;"; // moon symbol
  } else {
    theme.innerHTML = "&#9788;"; // sun symbol
  }
});
