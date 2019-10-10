const { test, trait } = use("Test/Suite")("Meetup");
const Factory = use("Factory");
const Database = use("Database");
const Meetup = use("App/Models/Meetup");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("should be able to view the list of meetups", async ({
  client,
  assert
}) => {
  const countExpected = 10;

  await Factory.model("App/Models/Meetup").createMany(countExpected);

  const response = await client.get("/api/meetups").end();

  response.assertStatus(200);

  assert.equal(countExpected, response.body.meetups.length);
});

test("should be able create meetup", async ({ client }) => {
  const { title, date, address, organizer } = await Factory.model(
    "App/Models/Meetup"
  ).make();

  const response = await client
    .post("/api/meetups")
    .send({ title, date, address, organizer })
    .end();

  response.assertStatus(200);

  response.assertJSONSubset({
    meetup: { title, address, organizer }
  });
});

test("should be able delete meetup", async ({ assert, client }) => {
  const meetup = await Factory.model("App/Models/Meetup").create();

  const response = await client.delete(`/api/meetups/${meetup.id}`).end();

  const totalMeetups = await Database.from("meetups").getCount();

  response.assertStatus(204);

  assert.equal(0, totalMeetups);
});
