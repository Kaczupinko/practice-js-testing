import randomNumber from './app';

describe('randomNumber', () => {
    test('returns 1 when the range is from 1 to 1', () => {
        expect(randomNumber(1, 1)).toBe(1);
    });

    test('throws error when arguments are not numbers', () => {{
        expect(() => randomNumber('a', 'b')).toThrow();
    }});

    test('throws errror if the range start is freater than the range end', () => {
        expect(() => randomNumber(4,3)).toThrow();
    });
})