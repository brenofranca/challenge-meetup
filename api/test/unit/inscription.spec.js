const { test, trait } = use("Test/Suite")("Inscription in a Meetup");
const Factory = use("Factory");
const User = use("App/Models/User");

trait("Auth/Client");
trait("Test/ApiClient");
trait("DatabaseTransactions");

test("it should be able possible to subscribe in a meetup", async ({
  assert,
  client
}) => {
  const user = await Factory.model("App/Models/User").create();
  const meetup = await Factory.model("App/Models/Meetup").create();

  const response = await client
    .post(`/api/meetups/${meetup.id}/subscriptions`)
    .loginVia(user, "jwt")
    .end();

  const subscriptionsMeetup = await user.meetups().first();

  assert.equal(meetup.id, subscriptionsMeetup.id);

  response.assertStatus(200);
});

test("it should be able possible to unsubscribe in a meetup", async ({
  assert,
  client
}) => {
  const user = await Factory.model("App/Models/User").create();
  const meetup = await Factory.model("App/Models/Meetup").create();

  await user.meetups().attach([meetup.id]);

  const response = await client
    .delete(`/api/meetups/${meetup.id}/subscriptions`)
    .loginVia(user, "jwt")
    .end();

  const subscriptionsMeetups = await user.meetups().first();

  assert.isNull(subscriptionsMeetups);

  response.assertStatus(200);
});
