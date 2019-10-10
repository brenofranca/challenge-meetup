"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.group(() => {
  Route.post("signin", "SessionController.store");
  Route.post("signup", "UserController.store").validator("UserStore");
  Route.resource("meetups", "MeetupController").apiOnly();
}).prefix("api");
