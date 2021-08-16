module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  const units = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
  const tens = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
  const hundreds = ' hundred';
  let result = 0;
  let countNumber = number.toString().split('');
  if (number < 20) {
    result = units[number];
    return result.trim();
  } else if (20 <= number && number < 100) {
    if (countNumber[1] === 0) {
      result = tens[countNumber[0]];
    } else {
      result = tens[countNumber[0]] + units[countNumber[1]]
    }
    return result.trim();
  } else {
    if (countNumber[1] === '1' && countNumber[2] <= '9') {
      result = units[countNumber[0]] + hundreds + units[countNumber[1] + countNumber[2]]
    } else {
      result = units[countNumber[0]] + hundreds + tens[countNumber[1]] + units[countNumber[2]]
    }
    return result.trim();
  }
}
