const Reader = require("./../../lib/utils/Reader");
const FizzbuzzService = require("./../../lib/services/FizzBuzzService");

describe("Unit Tests for FizzBuzzService Class", () => {
  test("Applyin validation for explorers ", () => {
    const explorer1 = { name: "Explorer1", score: 1 };
    const validation1 = FizzbuzzService.applyValidationInExplorer(explorer1);
    expect(validation1.trick).toEqual(1) // {name: "Explorer1", score: 1, trick: 1}
    
    const explorer3 = { name: "Explorer3", score: 3 };
    const validation2 = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
    expect(validation2.trick).toBe("FIZZ")

    const explorer5 = { name: "Explorer5", score: 5 };
    const validation3 = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
    expect(validation3.trick).toBe("BUZZ")

    const explorer15 = { name: "Explorer15", score: 15 };
    const validation4 = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
    expect(validation4.trick).toBe("FIZZBUZZ")
    
  });
});
