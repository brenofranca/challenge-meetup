"use strict";

const User = use("App/Models/User");

class UserController {
  async store({ auth, request }) {
    const data = await request.only(["name", "email", "password"]);

    const user = await User.create(data);

    const token = await auth.generate(user);

    return { user, token };
  }
}

module.exports = UserController;
