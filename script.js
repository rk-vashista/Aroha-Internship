document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const bmiValueSpan = document.getElementById('bmi-value');
    const bmiCategoryP = document.getElementById('bmi-category');

    calculateButton.addEventListener('click', () => {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight values.');
            return;
        }

        const bmi = calculateBMI(height, weight);
        const category = getBMICategory(bmi);

        displayResult(bmi, category);
    });

    const resetButton = document.getElementById('reset');

    resetButton.addEventListener('click', () => {
        heightInput.value = '';
        weightInput.value = '';
        resultDiv.classList.remove('show');
        setTimeout(() => {
            resultDiv.classList.add('hidden');
            bmiValueSpan.textContent = '';
            bmiCategoryP.textContent = '';
        }, 500);
    });

    function calculateBMI(height, weight) {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(1);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 25) return 'Normal weight';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    }

    function displayResult(bmi, category) {
        bmiValueSpan.textContent = bmi;
        bmiCategoryP.textContent = `Category: ${category}`;

        resultDiv.classList.remove('hidden');
        setTimeout(() => {
            resultDiv.classList.add('show');
        }, 50);
    }
});