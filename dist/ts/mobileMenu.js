"use strict";
const mobileMenuBox = document.getElementById("mobileMenuBox");
const mobileMenuButton = document.getElementById("mobileMenuButton");
function mobileMenuHide() {
    mobileMenuBox === null || mobileMenuBox === void 0 ? void 0 : mobileMenuBox.classList.toggle("animate-hideNav");
    mobileMenuBox === null || mobileMenuBox === void 0 ? void 0 : mobileMenuBox.classList.toggle("animate-showNav");
    mobileMenuBox === null || mobileMenuBox === void 0 ? void 0 : mobileMenuBox.classList.remove("hidden");
}
mobileMenuButton === null || mobileMenuButton === void 0 ? void 0 : mobileMenuButton.addEventListener("click", mobileMenuHide);
