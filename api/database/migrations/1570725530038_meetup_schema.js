"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeetupSchema extends Schema {
  up() {
    this.create("meetups", table => {
      table.increments();
      table.string("title").notNullable();
      table.string("date").notNullable();
      table.string("address").notNullable();
      table.string("organizer").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("meetups");
  }
}

module.exports = MeetupSchema;
