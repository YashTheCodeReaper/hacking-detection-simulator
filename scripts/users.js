"use strict";

import { UserLogic, usersArray } from "./business_logic/user_logic.js";

document.addEventListener("DOMContentLoaded", function () {
  const addUserMainButton = document.querySelector(".add-user-main-button");
  const formOverlay = document.querySelector(".form-overlay");
  const cancelAddUserButton = document.getElementById("cancel-button");
  const addUserButton = document.getElementById("add-button");

  addUserMainButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlay.style.transform = "translateY(0%)";
  });

  cancelAddUserButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlay.style.transform = "translateY(-100%)";
  });

  addUserButton.addEventListener("click", function (e) {
    e.preventDefault();
    let userName = document.getElementById("user-name").value;
    let userPhone = document.getElementById("user-phone").value;
    let userCountry = document.getElementById("user-country").value;

    if (!userName || !userCountry || !userPhone) return;
    usersArray.push(new UserLogic(userName, userCountry, userPhone));

    const html = `
          <tr>
            <td>${userName}</td>
            <td>${userPhone}</td>
            <td>${userCountry}</td>
            <td>${user.status}</td>
          </tr>
            `;
    $("table").append(html);

    formOverlay.style.transform = "translateY(-100%)";
  });
});
