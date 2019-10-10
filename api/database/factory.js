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
