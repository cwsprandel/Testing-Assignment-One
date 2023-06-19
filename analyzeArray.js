function analyzeArray(array) {

    let analysis = {
        average: 0,
        min: 0,
        max: 0,
        length: 0,
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (typeof(element) !== 'number') {
            return 'error: array can only contain numbers'
        }
    }

    let length = array.length
    if (length === 0) {
        return 'error: array must contain numbers'
    }
    analysis.length = length

    let sum = array.reduce(arraySum)
    analysis.average = sum / analysis.length

    analysis.min = Math.min(...array)
    analysis.max = Math.max(...array)

    function arraySum(total, current) {
        return total + current
    }

    return analysis
}

module.exports = analyzeArray