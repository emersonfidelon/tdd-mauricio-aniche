import { RomanNumber } from "./RomanNumber";

describe('Name of the group', () => {
  test('should know I symbol', () => {
    const roman = new RomanNumber();
    const number = roman.convert('I');
    expect(1).toBe(number);
  });

  test('should know V symbol', () => {
    const roman = new RomanNumber()
    const number = roman.convert('V')
    expect(5).toBe(number)
  });

  test('should know L symbol', () => {
    const roman = new RomanNumber()
    const number = roman.convert('L')
    expect(50).toBe(number)
  });

  test('should know two symbols, for example II', () => {
    const roman = new RomanNumber()
    const number = roman.convert('II')
    expect(2).toBe(number)
  });

  test('should know two symbols, for example XX', () => {
    const roman = new RomanNumber()
    const number = roman.convert('XX')
    expect(20).toBe(number)
  });
});