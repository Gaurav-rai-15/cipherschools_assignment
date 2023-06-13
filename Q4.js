function reverseNumber(number) {
  let reversedNumber = 0;

  while (number > 0) {
    let digit = number % 10;

    reversedNumber = reversedNumber * 10 + digit;

    number = Math.floor(number / 10);
  }

  return reversedNumber;
}

const inputNumber = 12345

const reversedNumber = reverseNumber(inputNumber);
console.log(`${reversedNumber}`);
