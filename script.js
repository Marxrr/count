// Selecting page elements
const countButton = document.getElementById('countButton');
const resultArea = document.getElementById('resultArea');

// Function to perform the counting
function performCounting() {
    // Getting input values
    const beginValue = Number(document.getElementById('begin').value);
    const endValue = Number(document.getElementById('end').value);
    let stepValue = Number(document.getElementById('step').value);

    // Clearing the result area
    resultArea.innerHTML = '';

    // Validation for empty fields
    if (document.getElementById('begin').value === '' || 
        document.getElementById('end').value === '' || 
        document.getElementById('step').value === '') {
        resultArea.innerHTML = '⚠️ Please fill in all fields!';
        return;
    }

    // Validation for step value
    if (stepValue === 0) {
        stepValue = 1; // Corrects invalid step
        resultArea.innerHTML += '⚠️ The step value was 0 or missing, so it will be set to 1.<br>';
    }

    // Setting up the counting logic
    let countOutput = '';

    if (beginValue < endValue) {
        // Ascending count
        for (let i = beginValue; i <= endValue; i += stepValue) {
            countOutput += `${i} 👉 `;
        }
    } else {
        // Descending count
        for (let i = beginValue; i >= endValue; i -= stepValue) {
            countOutput += `${i} 👉 `;
        }
    }

    countOutput += '🏁'; // Emoji to indicate the end of the count

    // Displaying the result
    resultArea.innerHTML += countOutput;
}

// Adding click event to the button
countButton.addEventListener('click', performCounting);

// Adding keypress event for Enter key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        performCounting();
    }
});

