"use strict";

// import UserLogic and usersArray from user_logic.js
import { UserLogic, usersArray } from "./business_logic/user_logic.js";

// after DOM tree creation
document.addEventListener("DOMContentLoaded", function () {
  // element declarations
  const addUserMainButton = document.querySelector(".add-user-main-button");
  const formOverlay = document.querySelector(".form-overlay");
  const cancelAddUserButton = document.getElementById("cancel-button");
  const addUserButton = document.getElementById("add-button");
  const randomUserGenerateButton = document.querySelector(
    ".random-user-button"
  );

  // open form functionality
  addUserMainButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlay.style.transform = "translateY(0%)";
  });

  // close form functionality
  cancelAddUserButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlay.style.transform = "translateY(-100%)";
  });

  // add user to usersArray by deriving the object from UserLogic class
  addUserButton.addEventListener("click", function (e) {
    e.preventDefault();
    let userName = document.getElementById("user-name").value;
    let userPhone = document.getElementById("user-phone").value;
    let userCountry = document.getElementById("user-country").value;

    // dheck for null
    if (!userName || !userCountry || !userPhone) return;
    // if no null, create UserLogic and add it to usersArray
    const user = new UserLogic(userName, userCountry, userPhone);
    usersArray.push(user);

    // append a new html tr for the added user
    const html = `
          <tr>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.country}</td>
            <td>${user.status}</td>
          </tr>
            `;
    $("table").append(html);

    // close the form
    formOverlay.style.transform = "translateY(-100%)";
  });

  // generate 30 random users
  randomUserGenerateButton.addEventListener("click", function (e) {
    e.preventDefault();
    const sampleNames = [
      "Bruce",
      "Tony",
      "Peter",
      "Banner",
      "Natasha",
      "Jimmy",
      "Falcon",
      "John",
      "Romanoff",
      "Lincon",
    ];
    const samplePhones = [
      "8865321459",
      "9987413658",
      "6635412035",
      "8852364179",
      "1254789635",
      "2424245785",
      "4234534785",
      "9634523254",
      "8242435721",
      "7452756782",
    ];
    const sampleCountry = [
      "BRAZIL",
      "INDIA",
      "USA",
      "RUSSIA",
      "NORWAY",
      "CHINA",
      "CHILE",
      "CZECH",
      "WAKANDA",
      "SWITZERLAND",
    ];

    for (let i = 0; i < 10; i++) {
      const randomUser = new UserLogic(
        sampleNames[i],
        sampleCountry[i],
        samplePhones[i]
      );
      usersArray.push(randomUser);

      // append a new html tr for the generated user
      const html = `
          <tr>
            <td>${randomUser.name}</td>
            <td>${randomUser.phone}</td>
            <td>${randomUser.country}</td>
            <td>${randomUser.status}</td>
          </tr>
            `;
      $("table").append(html);
    }
  });
});
