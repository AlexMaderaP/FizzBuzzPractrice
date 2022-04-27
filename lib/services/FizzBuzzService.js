class FizzBuzzService {
  static applyValidationInExplorer(explorer) {
    if (explorer.score % 3 === 0) {
      if (explorer.score % 5 === 0) {
        explorer.trick = "FIZZBUZZ";
        return explorer;
      }
      explorer.trick = "FIZZ";
      return explorer;
    }
    if (explorer.score % 5 === 0) {
      explorer.trick = "BUZZ";
      return explorer;
    }
    explorer.trick = explorer.score;
    return explorer;
  }

  static applyValidationInNumber(number) {
    if (number % 3 === 0) {
      if (number % 5 === 0) {
        return "FIZZBUZZ";
      }
      return "FIZZ";
    }
    if (number % 5 === 0) {
      return "BUZZ";
    }
    return number;
  }
}

module.exports = FizzBuzzService;
