"use strict";

const Meetup = use("App/Models/Meetup");
const { format } = require("date-fns");

class MeetupController {
  async index({ request }) {
    const date = request.input("date");
    const agroupMeetups = request.input("agrouped");

    const query = Meetup.query();

    if (agroupMeetups) {
      if (date) {
        query.where("date", "LIKE", `%${date}%`).fetch();
      } else {
        const { date: dateFirstMeetup } = await Meetup.query()
          .select("date")
          .orderBy("date")
          .first();

        console.log(dateFirstMeetup);

        const dateFirstMeetupFormated = format(
          new Date(dateFirstMeetup),
          "yyyy-MM-dd"
        );

        query.where("date", "LIKE", `%${dateFirstMeetupFormated}%`).fetch();
      }
    } else {
      query.orderBy("date", "ASC");
    }

    const meetups = await query.fetch();

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
