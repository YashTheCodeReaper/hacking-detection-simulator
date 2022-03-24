import { Domain } from "../models/domain.js";

export let domainsArray = [];

export class DomainLogic extends Domain {
  constructor(name, ip, owner) {
    super(name, ip, owner);
    this.userCheckins = [];
    this.status = "NORMAL";
  }

  register() {
    domainsArray.push({
      name: this.name,
      ip: this.ip,
      owner: this.owner,
      status: this.status,
      userCheckins: this.userCheckins,
    });
  }
}
