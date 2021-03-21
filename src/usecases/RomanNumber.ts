class RomanNumber {
  convert = (roman: string): Number => {
    if(roman === 'I') {
      return 1
    }

    if(roman === 'V') {
      return 5
    }
  }
}

export { RomanNumber }