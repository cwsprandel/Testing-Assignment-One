const reverse = require('./reverse');

test('test should become tset', () => {
    expect(reverse('test')).toBe('tset');
});

test('1234 should become 4321', () => {
    expect(reverse('1234')).toBe('4321');
});

test('#1#t# should become #t#1#', () => {
    expect(reverse('#1#t#')).toBe('#t#1#');
});