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

  convert = (roman: string): number => {
    let count:number = 0
    let lastNumberOnRight:number = 0;
    for (let position = roman.length - 1; position >= 0; position--) {
      let current:number = this.symbols[roman[position]];
      let multiplier:number = (current < lastNumberOnRight) ? -1 : 1;
      
      count += current * multiplier;

      lastNumberOnRight = current
    }

    return count
  }
}

export { RomanNumber }