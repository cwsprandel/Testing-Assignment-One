const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function cipher(message, shift) {
    let newMessage = ''
    if (typeof(message) === 'string' && typeof(shift) === 'number') {
            
        for (let index = 0; index < message.length; index++) {
            const element = message[index];

            let currentPosition = getCurrentPosition(element)

            if (currentPosition < 0) {
                let newElement = element
                newMessage = newMessage + newElement
            } else {
                let newPosition = getNewPosition(currentPosition, shift)
                let elementCase = originalCase(element)
                let newElement = getNewElement(newPosition, elementCase)
                newMessage = newMessage + newElement
            }
        }
    } else {
        newMessage = 'error: please enter a message and shift'
    }

    return newMessage
}

function getCurrentPosition(element) {
    if (element == element.toLowerCase()){
        position = letters.indexOf(element)
    } else {
        lowerElement = element.toLowerCase()
        position = letters.indexOf(lowerElement)
    }

    return position
}

function getNewPosition(current, shift) {
    let newPosition = current + shift
    while (newPosition > 25) {
        newPosition = newPosition - 26
    }
    
    return newPosition
}

function originalCase(element) {
    let letterCase = ''
    if (element == element.toLowerCase()) {
        letterCase = 'lower'
    } else {
        letterCase = 'upper'
    }

    return letterCase
}

function getNewElement(position, letterCase) {
    let newElement = letters[position]
    if (letterCase === 'upper') {
        newElement = newElement.toUpperCase()
    }

    return newElement
}


module.exports = cipher


//for each character
    //check if capital letter
        //if so, capitalize letter of newElement
    //get current position
    //if -1, newElement = element
    //find new position
        //while over 25, subtract 26