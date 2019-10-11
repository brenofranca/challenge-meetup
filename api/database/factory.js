"use strict";

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/User", (faker, i, data) => {
  return {
    name: "Breno França",
    email: "franciscobreno.si@gmail.com",
    password: "secret",
    ...data
  };
});

Factory.blueprint("App/Models/Meetup", (faker, i, data) => {
  return {
    title: faker.sentence({ words: 3 }),
    date: faker.pickone([
      "2019-10-12 18:00:00",
      "2019-10-13 14:00:00",
      "2019-10-14 16:00:00"
    ]),
    address: faker.address(),
    organizer: faker.name(),
    ...data
  };
});
