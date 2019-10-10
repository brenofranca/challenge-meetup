"use strict";

class UserStore {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: "required",
      email: "required|email|unique:users,email",
      password: "required"
    };
  }

  // async fails() {
  //   return this.ctx.response.status(422);
  // }
}

module.exports = UserStore;
