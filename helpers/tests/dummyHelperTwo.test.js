const DummyHelperTwo = require("../dummyHelperTwo");

describe("helpers", () => {
  test("Dummy Helper Two", () => {
    expect(DummyHelperTwo()).toEqual(true);
  });
});
