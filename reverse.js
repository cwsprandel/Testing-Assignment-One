const outputElement = document.getElementById('reverseOutput');

function runFromButton() {
    let input = document.getElementById('reverseInput').value;
    reverse(input);
}

function reverse(string) {
    const stringLength = string.length;
    let newString = "";

    for (let index = (stringLength - 1); index >= 0; index--) {
        const element = string[index];
        newString = newString + element;
    }
    outputElement.textContent = newString;

    return newString;
}

const button = document.getElementById('reverseButton');
button.addEventListener('click', () => {
    runFromButton();
});

export default reverse;