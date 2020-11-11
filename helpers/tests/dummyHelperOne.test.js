const DummyHelperOne = require("../dummyHelperOne");

describe("helpers", () => {
  test("Dummy Helper One", () => {
    expect(DummyHelperOne()).toEqual(true);
  });
});
