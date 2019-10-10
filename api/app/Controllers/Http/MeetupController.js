"use strict";

const Meetup = use("App/Models/Meetup");

class MeetupController {
  async index() {
    const meetups = await Meetup.all();

    return { meetups };
  }

  async store({ request }) {
    const data = request.only(["title", "date", "address", "organizer"]);

    const meetup = await Meetup.create(data);

    return { meetup };
  }

  async destroy({ params }) {
    const meetup = await Meetup.findOrFail(params.id);

    await meetup.delete();
  }
}

module.exports = MeetupController;
