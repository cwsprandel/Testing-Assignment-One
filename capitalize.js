
function capitalize(string) {
    const firstChar = string.charAt(0);
    
    const capitalFirstChar = firstChar.toUpperCase();
    
    const remainingChars = string.slice(1);

    const newString = capitalFirstChar + remainingChars;
    
    return newString;
}

module.exports = capitalize;