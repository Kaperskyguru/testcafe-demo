const { Selector, ClientFunction } = require("testcafe");

fixture`Register Page`
  .page`https://ecommerce-playground.lambdatest.io/index.php?route=account/register`;

test("Register a user", async (t) => {
  await t
    .typeText(Selector("#input-firstname"), "Solomon")
    .typeText(Selector("#input-lastname"), "Eseme")
    .typeText(Selector("#input-email"), "solomon@example.com")
    .typeText(Selector("#input-telephone"), "0712345678")
    .typeText(Selector("#input-password"), "PAssword123!")
    .typeText(Selector("#input-confirm"), "PAssword123!")
    .click(Selector("#input-agree"))
    .click(Selector("input.btn-primary"));
});
