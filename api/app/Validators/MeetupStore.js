"use strict";

class MeetupStore {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      title: "required",
      date: "required|date",
      address: "required",
      organizer: "required"
    };
  }
}

module.exports = MeetupStore;
