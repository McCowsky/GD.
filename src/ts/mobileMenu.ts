const mobileMenuBox = document.getElementById("mobileMenuBox");
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenuChild1 = document.getElementById("mobileMenuChild1");
const mobileMenuChild2 = document.getElementById("mobileMenuChild2");

function mobileMenuHide() {
  mobileMenuBox?.classList.toggle("animate-hideNav");
  mobileMenuBox?.classList.toggle("animate-showNav");

  mobileMenuBox?.classList.remove("hidden");

  mobileMenuChild1?.classList.toggle("bg-black");
  mobileMenuChild1?.classList.toggle("bg-white");
  mobileMenuChild2?.classList.toggle("bg-black");
  mobileMenuChild2?.classList.toggle("bg-white");
}

mobileMenuButton?.addEventListener("click", mobileMenuHide);
