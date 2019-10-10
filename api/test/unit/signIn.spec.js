const { test, trait } = use("Test/Suite")("SignIn");
const Factory = use("Factory");
const User = use("App/Models/User");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("should be able to sign in by passing credentials correctly", async ({
  assert,
  client
}) => {
  await User.create({
    name: "Breno França",
    email: "franciscobreno.si@gmail.com",
    password: "123456"
  });

  const response = await client
    .post("/api/signin")
    .send({ email: "franciscobreno.si@gmail.com", password: "123456" })
    .end();

  response.assertStatus(200);
  assert.isDefined(response.body.token);
});

test("should not be able to sign in by passing credentials incorrect", async ({
  assert,
  client
}) => {
  await User.create({
    name: "Breno França",
    email: "franciscobreno.si@gmail.com",
    password: "123456"
  });

  const response = await client
    .post("/api/signin")
    .send({ email: "franciscobreno.si@gmail.com", password: "1234567" })
    .end();

  response.assertStatus(401);
  assert.isUndefined(response.body.token);
});
