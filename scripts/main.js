"use strict";

// import UserLogic from user_logic.js
import { UserLogic } from "./business_logic/user_logic.js";
// import DomainLogic from domain_logic.js
import { DomainLogic } from "./business_logic/domain_logic.js";

// after DOM tree creation
document.addEventListener("DOMContentLoaded", function () {
  // element declarations for users
  const addUserMainButton = document.querySelector(".add-user-main-button");
  const formOverlayUsers = document.querySelector(".form-overlay-users");
  const cancelAddUserButton = document.getElementById("cancel-button-users");
  const addUserButton = document.getElementById("add-button-users");
  const randomUserGenerateButton = document.querySelector(
    ".random-user-button"
  );

  // element declarations for domains
  const addDomainMainButton = document.querySelector(".add-domain-main-button");
  const formOverlayDomain = document.querySelector(".form-overlay-domain");
  const cancelAddDomainButton = document.getElementById(
    "cancel-button-domains"
  );
  const addDomainButton = document.getElementById("add-button-domains");
  const randomDomainGenerateButton = document.querySelector(
    ".random-domain-button"
  );

  // open form functionality for users
  addUserMainButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlayUsers.style.transform = "translateY(0%)";
  });

  // close form functionality for users
  cancelAddUserButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlayUsers.style.transform = "translateY(-100%)";
  });

  // open form functionality for domains
  addDomainMainButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlayDomain.style.transform = "translateY(0%)";
  });

  // close form functionality for domains
  cancelAddDomainButton.addEventListener("click", function (e) {
    e.preventDefault();
    formOverlayDomain.style.transform = "translateY(-100%)";
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
    user.register();

    // append a new html tr for the added user
    const html = `
          <tr>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.country}</td>
            <td>${user.status}</td>
          </tr>
            `;
    $(".user-table").append(html);

    // close the form
    formOverlayUsers.style.transform = "translateY(-100%)";
  });

  // add domain to domainsArray by deriving the object from DomainLogic class
  addDomainButton.addEventListener("click", function (e) {
    e.preventDefault();
    let domainName = document.getElementById("domain-name").value;
    let domainIP = document.getElementById("domain-ip").value;
    let domainOwner = document.getElementById("domain-owner").value;

    // dheck for null
    if (!domainName || !domainIP || !domainOwner) return;
    // if no null, create DomainLogic and add it to domainsArray
    const domain = new DomainLogic(domainName, domainIP, domainOwner);
    domain.register();

    // append a new html tr for the added domain
    const html = `
          <tr>
            <td>${domain.name}</td>
            <td>${domain.ip}</td>
            <td>${domain.owner}</td>
            <td>${domain.status}</td>
          </tr>
            `;
    $(".domain-table").append(html);

    // close the form
    formOverlayDomain.style.transform = "translateY(-100%)";
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
      randomUser.register();

      // append a new html tr for the generated user
      const html = `
          <tr>
            <td>${randomUser.name}</td>
            <td>${randomUser.phone}</td>
            <td>${randomUser.country}</td>
            <td>${randomUser.status}</td>
          </tr>
            `;
      $(".user-table").append(html);
    }
  });

  // generate 5 random domains
  randomDomainGenerateButton.addEventListener("click", function (e) {
    e.preventDefault();
    const sampleDomains = [
      "flipkart.com",
      "amazon.com",
      "awwwards.com",
      "reliance.com",
      "stackoverflow.com",
    ];
    const sampleIps = [
      "270.568.23.2",
      "665.224.3.8",
      "674.335.33.2",
      "192.168.1.1",
      "277.255.55.5",
    ];
    const sampleOwners = [
      "James McGill",
      "Jeff Bezos",
      "Smith",
      "Ambani",
      "Noone",
    ];

    for (let i = 0; i < 5; i++) {
      const randomDomain = new DomainLogic(
        sampleDomains[i],
        sampleIps[i],
        sampleOwners[i]
      );
      randomDomain.register();

      // append a new html tr for the generated domains
      const html = `
          <tr>
            <td>${randomDomain.name}</td>
            <td>${randomDomain.ip}</td>
            <td>${randomDomain.owner}</td>
            <td>${randomDomain.status}</td>
          </tr>
            `;
      $(".domain-table").append(html);
    }
  });
});
