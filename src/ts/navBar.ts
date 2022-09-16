const navBarBox = document.getElementById("navBarBox");
window.onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY >= 200) {
    navBarBox?.classList.add("bg-custom_purple");
    navBarBox?.classList.remove("bg-transparent");
  } else {
    navBarBox?.classList.remove("bg-custom_purple");
    navBarBox?.classList.add("bg-transparent");
  }
};
