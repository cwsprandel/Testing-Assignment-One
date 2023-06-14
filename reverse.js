function reverse(string) {
    const stringLength = string.length;
    let newString = "";

    for (let index = (stringLength - 1); index >= 0; index--) {
        const element = string[index];
        newString = newString + element;
    }

    return newString;
}

module.exports = reverse;