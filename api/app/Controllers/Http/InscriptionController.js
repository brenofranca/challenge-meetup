"use strict";

const User = use("App/Models/User");
const Meetup = use("App/Models/Meetup");

class InscriptionController {
  async store({ params, auth }) {
    const user = await auth.user;
    const meetup = await Meetup.findOrFail(params.meetups_id);

    await user.meetups().attach([meetup.id]);

    const meetups = await user.meetups().fetch();

    return { user, meetups: meetups.toJSON() };
  }

  async destroy({ params, auth }) {
    const user = await auth.user;
    const meetup = await Meetup.findOrFail(params.meetups_id);

    await user.meetups().detach([meetup.id]);

    const meetups = await user.meetups().fetch();

    return { user, meetups: meetups.toJSON() };
  }
}

module.exports = InscriptionController;
