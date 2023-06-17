const capitalize = require('./capitalize');

test('test should become Test', () => {
    expect(capitalize('test')).toBe('Test');
});

test('1est should become 1est', () => {
    expect(capitalize('1est')).toBe('1est');
});

test('#est should become #est', () => {
    expect(capitalize('#est')).toBe('#est');
});