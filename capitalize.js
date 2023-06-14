
const outputElement = document.getElementById('captializeOutput');

function runFromButton() {
    let input = document.getElementById('captializeInput').value;
    capitalize(input);
}

function capitalize(string) {
    const firstChar = string.charAt(0);
    
    const capitalFirstChar = firstChar.toUpperCase();
    
    const remainingChars = string.slice(1);

    const newString = capitalFirstChar + remainingChars;
    outputElement.textContent = newString;
    
    return newString;
}

const button = document.getElementById('capitalizeButton');
button.addEventListener('click', () => {
    runFromButton();
});

export default capitalize;