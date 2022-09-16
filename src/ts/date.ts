const dateBox = document.getElementById("dateBox");
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
dateBox!.innerHTML = String(currentYear);
