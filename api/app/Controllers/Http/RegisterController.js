"use strict";

const User = use("App/Models/User");

class RegisterController {
  async store({ request }) {
    const data = await request.only(["name", "email", "password"]);

    const user = await User.create(data);

    return { user };
  }
}

module.exports = RegisterController;
