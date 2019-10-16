"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.group(() => {
  Route.post("session", "SessionController.store");
  Route.post("register", "RegisterController.store").validator("UserStore");

  Route.get("me", "UserController.show").middleware(["auth"]);
  Route.put("me", "UserController.update")
    .validator("UserUpdate")
    .middleware(["auth"]);

  Route.resource("meetups", "MeetupController")
    .validator(new Map([[["meetups.store"], ["MeetupStore"]]]))
    .middleware(["auth"])
    .apiOnly();

  Route.post(
    "/meetups/:meetups_id/subscriptions",
    "InscriptionController.store"
  ).middleware(["auth"]);

  Route.delete(
    "/meetups/:meetups_id/subscriptions",
    "InscriptionController.destroy"
  ).middleware(["auth"]);
}).prefix("api");
