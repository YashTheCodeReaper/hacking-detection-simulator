import { User } from "../models/user.js";

export let usersArray = [];

export class UserLogic extends User {
  constructor(name, country, phone) {
    super(name, country, phone);
    this.visitHistory = [];
    this.status = "NORMAL";
  }

  register() {
    usersArray.push({
      name: this.name,
      country: this.country,
      phone: this.phone,
      status: this.status,
      visitHistory: this.visitHistory,
    });
  }
}
