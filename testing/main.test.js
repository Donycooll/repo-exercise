const {mult, addFive, final} = require(`./main`);

test('multiply by self', () => {
    expect(mult(5)).toBe(25);
})

test('add five to the last result', () => {
    expect(addFive(mult(5))).toBe(30);
})

test('show the final result as a string', () => {
    expect(final(addFive(mult(5)))).toBe('the final result is 30');
})