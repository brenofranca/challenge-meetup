"use strict";

class UserUpdate {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: "required",
      email: "email",
      password: "confirmed"
    };
  }
}

module.exports = UserUpdate;
