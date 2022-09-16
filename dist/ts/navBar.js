"use strict";
const navBarBox = document.getElementById("navBarBox");
window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY >= 200) {
        navBarBox === null || navBarBox === void 0 ? void 0 : navBarBox.classList.add("bg-custom_purple");
        navBarBox === null || navBarBox === void 0 ? void 0 : navBarBox.classList.remove("bg-transparent");
    }
    else {
        navBarBox === null || navBarBox === void 0 ? void 0 : navBarBox.classList.remove("bg-custom_purple");
        navBarBox === null || navBarBox === void 0 ? void 0 : navBarBox.classList.add("bg-transparent");
    }
};
