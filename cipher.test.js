const cipher = require('./cipher')

test('cipher(a,5) = f', () => {
    expect(cipher('a',5)).toBe('f')
})

test('cipher(3) = error: please enter a message and shift', () => {
    expect(cipher(3)).toBe('error: please enter a message and shift')
})

test('cipher(a,26) = a', () => {
    expect(cipher('a',26)).toBe('a')
})

test('cipher(a,78) = a', () => {
    expect(cipher('a',78)).toBe('a')
})

test('cipher(test,1) = uftu', () => {
    expect(cipher('test',1)).toBe('uftu')
})

test('cipher(Hello, world!,13) = "Uryyb, jbeyq!"', () => {
    expect(cipher('Hello, world!',13)).toBe('Uryyb, jbeyq!')
})