const { test, trait } = use("Test/Suite")("Session");
const Factory = use("Factory");
const User = use("App/Models/User");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("should be able to sign in by passing credentials correctly", async ({
  assert,
  client
}) => {
  const password = "123456";

  const { email } = await Factory.model("App/Models/User").create({
    password
  });

  const response = await client
    .post("/api/session")
    .send({ email, password })
    .end();

  response.assertStatus(200);

  assert.isDefined(response.body.token);
});

test("should not be able to sign in by passing credentials incorrect", async ({
  assert,
  client
}) => {
  const { email } = await Factory.model("App/Models/User").create();

  const response = await client
    .post("/api/session")
    .send({ email, password: "1234567" })
    .end();

  response.assertStatus(401);

  assert.isUndefined(response.body.token);
});

test("should not be able user sign in if email not registered", async ({
  client
}) => {
  const { email, password } = await Factory.model("App/Models/User").make();

  const response = await client
    .post("/api/session")
    .send({ email, password })
    .end();

  response.assertStatus(401);

  response.assertJSONSubset([
    { message: "Cannot find user with provided email" }
  ]);
});
