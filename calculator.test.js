const calculate = require('./calculator')

//------------- Add test cases ----------------------------------------
test('2+2 = 4', () => {
    expect(calculate.add(2,2)).toBe(4)
})

test('6+4 = 10', () => {
    expect(calculate.add(6,4)).toBe(10)
})

test('-3+7 = 4', () => {
    expect(calculate.add(-3,7)).toBe(4)
})

test('5+(blank) = error: enter two numbers', () => {
    expect(calculate.add(5)).toBe('error: enter two numbers')
})

test('5+! = error: enter two numbers', () => {
    expect(calculate.add(5,'!')).toBe('error: enter two numbers')
})

//------------- Subtract test cases ----------------------------------------
test('8-4 = 4', () => {
    expect(calculate.subtract(8,4)).toBe(4)
})

test('10-3 = 7', () => {
    expect(calculate.subtract(10,3)).toBe(7)
})

test('8-(blank) = error: enter two numbers', () => {
    expect(calculate.subtract(8)).toBe('error: enter two numbers')
})

test('5-! = error: enter two numbers', () => {
    expect(calculate.subtract(5,'!')).toBe('error: enter two numbers')
})

test('-4-3 = -7', () => {
    expect(calculate.subtract(-4,3)).toBe(-7)
})

test('-4--3 = -1', () => {
    expect(calculate.subtract(-4,-3)).toBe(-1)
})

test('4-4 = 0', () => {
    expect(calculate.subtract(4,4)).toBe(0)
})

//------------- Divide test cases ----------------------------------------
test('8/4 = 2', () => {
    expect(calculate.divide(8,4)).toBe(2)
})

test('10/3 = 3.33', () => {
    expect(calculate.divide(10,3)).toBe(3.33)
})

test('8-(blank) = error: enter two numbers', () => {
    expect(calculate.divide(8)).toBe('error: enter two numbers')
})

test('5-! = error: enter two numbers', () => {
    expect(calculate.divide(5,'!')).toBe('error: enter two numbers')
})

test('-4/8 = -0.5', () => {
    expect(calculate.divide(-4,8)).toBe(-0.5)
})

test('-4/-2 = 2', () => {
    expect(calculate.divide(-4,-2)).toBe(2)
})

test('4/0 = error: cannot divide by zero', () => {
    expect(calculate.divide(4,0)).toBe('error: cannot divide by zero')
})
