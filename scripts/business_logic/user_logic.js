import { User } from "../models/user.js";

export let usersArray = [];

export class UserLogic extends User {
  constructor(name, country, phone) {
    super(name, country, phone);
    this.visitHistory = [];
    this.status = "NORMAL";
  }

  onDomainVisit(domainObj, time) {
    this.visitHistory.push({ domainObj, time });
  }
}
