"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InscriptionMeetupSchema extends Schema {
  up() {
    this.create("inscription_meetups", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table
        .integer("meetup_id")
        .unsigned()
        .references("id")
        .inTable("meetups");
      table.timestamps();
    });
  }

  down() {
    this.drop("inscription_meetups");
  }
}

module.exports = InscriptionMeetupSchema;
