"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.post("signin", "SessionController.store").prefix("api");
Route.post("signup", "UserController.store")
  .validator("UserStore")
  .prefix("api");
