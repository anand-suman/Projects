const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height value: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight value: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.innerHTML = `Underweight: ${bmi}`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `Normal range: ${bmi}`;
        } else {
            results.innerHTML = `Overweight: ${bmi}`;
        }
    }
});
