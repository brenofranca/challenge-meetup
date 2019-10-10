"use strict";

class UserController {
  async show({ auth }) {
    const user = await auth.user;

    await user.load("meetups");

    return user;
  }

  async update({ request, auth }) {
    const user = await auth.user;

    const password = request.input("password");

    const data = await request.only(["name", "email"]);

    if (password) {
      data.password = password;
    }

    user.merge(data);

    await user.save();

    await user.load("meetups");

    return user;
  }
}

module.exports = UserController;
