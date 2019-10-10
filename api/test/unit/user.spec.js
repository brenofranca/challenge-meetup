const { test, trait } = use("Test/Suite")("User");
const Factory = use("Factory");
const User = use("App/Models/User");
const Hash = use("Hash");

trait("Auth/Client");
trait("Test/ApiClient");
trait("DatabaseTransactions");

test("should be able show data user authenticated", async ({ client }) => {
  const user = await Factory.model("App/Models/User").create();

  const response = await client
    .get("/api/me")
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);

  response.assertJSONSubset({
    name: user.name,
    email: user.email
  });
});

test("should be able update data user authenticated", async ({
  assert,
  client
}) => {
  const password = "secret";

  const user = await Factory.model("App/Models/User").create();

  const response = await client
    .put("/api/me")
    .loginVia(user, "jwt")
    .send({
      name: user.name,
      email: user.mail,
      password,
      password_confirmation: password
    })
    .end();

  const passwordCorrect = await Hash.verify(password, response.body.password);

  response.assertStatus(200);

  response.assertJSONSubset({
    name: user.name,
    email: user.email
  });

  assert.isTrue(passwordCorrect);
});
