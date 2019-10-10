"use strict";

const Meetup = use("App/Models/Meetup");

class MeetupController {
  async index() {
    const meetups = await Meetup.all();

    return { meetups };
  }

  async store({ request, response }) {
    const data = request.only(["title", "date", "address", "organizer"]);

    const meetup = await Meetup.create(data);

    return { meetup };
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = MeetupController;
