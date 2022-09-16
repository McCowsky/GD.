"use strict";
const mobileMenuBox = document.getElementById("mobileMenuBox");
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenuChild1 = document.getElementById("mobileMenuChild1");
const mobileMenuChild2 = document.getElementById("mobileMenuChild2");
function mobileMenuHide() {
    mobileMenuBox === null || mobileMenuBox === void 0 ? void 0 : mobileMenuBox.classList.toggle("animate-hideNav");
    mobileMenuBox === null || mobileMenuBox === void 0 ? void 0 : mobileMenuBox.classList.toggle("animate-showNav");
    mobileMenuBox === null || mobileMenuBox === void 0 ? void 0 : mobileMenuBox.classList.remove("hidden");
    mobileMenuChild1 === null || mobileMenuChild1 === void 0 ? void 0 : mobileMenuChild1.classList.toggle("bg-black");
    mobileMenuChild1 === null || mobileMenuChild1 === void 0 ? void 0 : mobileMenuChild1.classList.toggle("bg-white");
    mobileMenuChild2 === null || mobileMenuChild2 === void 0 ? void 0 : mobileMenuChild2.classList.toggle("bg-black");
    mobileMenuChild2 === null || mobileMenuChild2 === void 0 ? void 0 : mobileMenuChild2.classList.toggle("bg-white");
}
mobileMenuButton === null || mobileMenuButton === void 0 ? void 0 : mobileMenuButton.addEventListener("click", mobileMenuHide);
