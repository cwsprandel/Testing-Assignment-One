const analyzeArray = require('./analyzeArray')

test('analyzeArray([1,2,3]) = {average: 2, min: 1, max: 3, length: 3}', () => {
    expect(analyzeArray([1,2,3])).toEqual({"average": 2, "min": 1, "max": 3, "length": 3})
})

test('analyzeArray([1,a,3]) = error: array can only contain numbers', () => {
    expect(analyzeArray([1,'a',3])).toEqual('error: array can only contain numbers')
})

test('analyzeArray([]) = error: array must contain numbers', () => {
    expect(analyzeArray([])).toEqual('error: array must contain numbers')
})