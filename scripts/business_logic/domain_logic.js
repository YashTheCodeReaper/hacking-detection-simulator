import { Domain } from "../models/domain.js";

export let domainsArray = [];

export class DomainLogic extends Domain {
  constructor(name, ip, owner) {
    super(name, ip, owner);
    this.userCheckins = [];
    this.status = "Normal";
  }
}
