const Adyen = require("@adyen/api-library");

describe("Payment", () => {
  it("Create payment with Adyen", () => {
    console.dir(Adyen);
    expect(Adyen.CheckoutAPI).toBeTruthy();
  });
});
