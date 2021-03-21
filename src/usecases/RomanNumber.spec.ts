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
});