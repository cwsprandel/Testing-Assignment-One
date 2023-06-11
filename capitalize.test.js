const capitalize = require('./capitalize');

test('test should become Test', () => {
    expect(capitalize('test')).toBe('Test');
});