const mobileMenuBox = document.getElementById("mobileMenuBox");
const mobileMenuButton = document.getElementById("mobileMenuButton");

function mobileMenuHide() {
  mobileMenuBox?.classList.toggle("animate-hideNav");
  mobileMenuBox?.classList.toggle("animate-showNav");
  mobileMenuBox?.classList.remove("hidden");
}

mobileMenuButton?.addEventListener("click", mobileMenuHide);
