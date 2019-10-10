const { test, trait } = use("Test/Suite")("SignUp");
const Factory = use("Factory");
const User = use("App/Models/User");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("should be able user sign up and generate jwt", async ({
  assert,
  client
}) => {
  const { name, email, password } = await Factory.model(
    "App/Models/User"
  ).make();

  const response = await client
    .post("/api/signup")
    .header("accept", "application/json")
    .send({
      name,
      email,
      password
    })
    .end();

  assert.isDefined(response.body.token);

  response.assertStatus(200);

  response.assertJSONSubset({
    user: {
      name,
      email
    }
  });

  await User.query()
    .where({ email })
    .firstOrFail();
});

test("should not be able user sign up if email already registered", async ({
  client
}) => {
  const { name, email, password } = await Factory.model(
    "App/Models/User"
  ).create();

  const response = await client
    .post("/api/signup")
    .header("accept", "application/json")
    .send({
      name,
      email,
      password
    })
    .end();

  response.assertStatus(400);
  response.assertJSONSubset([{ message: "unique validation failed on email" }]);
});

test("should not be able user sign up with not name, email or password", async ({
  client
}) => {
  const { name, email, password } = await Factory.model(
    "App/Models/User"
  ).make();

  const store = () =>
    client.post("/api/signup").header("accept", "application/json");

  let response = await store()
    .send({ email, password })
    .end();
  response.assertStatus(400);
  response.assertJSONSubset([
    { message: "required validation failed on name" }
  ]);

  response = await store()
    .send({ name, password })
    .end();
  response.assertStatus(400);
  response.assertJSONSubset([
    { message: "required validation failed on email" }
  ]);

  response = await store()
    .send({ name, email })
    .end();
  response.assertStatus(400);
  response.assertJSONSubset([
    { message: "required validation failed on password" }
  ]);
});
