class RomanNumber {
  readonly symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  convert = (roman: string): Number => {
    let count = 0
    for (let position = 0; position < roman.length; position++) {
      count += this.symbols[roman[position]];
    }

    return count
  }
}

export { RomanNumber }