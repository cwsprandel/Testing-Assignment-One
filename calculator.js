const calculate = {
    add : (x,y) => {
        if (typeof(x) === 'number' && typeof(y) === 'number') {
            let answer = x + y
            return answer
        } else {
            let message = 'error: enter two numbers'
            return message
        }
    },
    subtract : (x,y) => {
        if (typeof(x) === 'number' && typeof(y) === 'number') {
            let answer = x - y
            return answer
        } else {
            let message = 'error: enter two numbers'
            return message
        }
    },
    divide : (x,y) => {
        if (y == 0) {
            let message = 'error: cannot divide by zero'
            return message
        } else {
            if (typeof(x) === 'number' && typeof(y) === 'number') {
                let answer = x / y
                return answer
            } else {
                let message = 'error: enter two numbers'
                return message
            }
        }
    }
}

module.exports = calculate