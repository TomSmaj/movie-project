<<<<<<< HEAD
var expect = require("chai").expect;

describe("canary test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
=======
const expect = require("chai").expect;

describe("canary test", () => {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", () => {
>>>>>>> da26bc76e9b1006660a8a22d5799a24ad4762d57
    expect(true).to.be.true;
  });
});
