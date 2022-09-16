const navBarBox = document.getElementById("navBarBox");
window.onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY >= 200) {
    navBarBox?.classList.add("bg-[#7A0E53]");
    navBarBox?.classList.remove("bg-transparent");
  } else {
    navBarBox?.classList.remove("bg-[#7A0E53]");
    navBarBox?.classList.add("bg-transparent");
  }
};
