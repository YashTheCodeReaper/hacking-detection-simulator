"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const addUserMainButton = document.querySelector(".add-user-main-button");
  const formOverlay = document.querySelector(".form-overlay");
  const cancelAddUserButton = document.getElementById("cancel-button");

  addUserMainButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlay.style.transform = "translateY(0%)";
  });

  cancelAddUserButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlay.style.transform = "translateY(-100%)";
  });
});