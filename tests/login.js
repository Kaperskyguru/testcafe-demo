const { Selector } = require("testcafe");

fixture`Login Page`
  .page`https://ecommerce-playground.lambdatest.io/index.php?route=account/login`;

test("Login a user", async (t) => {
  await t
    .typeText(Selector("#input-email"), "solomon@example.com")
    .typeText(Selector("#input-password"), "Password123!")
    .click(Selector("input.btn-primary"));
});
