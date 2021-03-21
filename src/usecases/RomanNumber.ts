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
    return this.symbols[roman]
  }
}

export { RomanNumber }