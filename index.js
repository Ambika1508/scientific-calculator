
function clearDisplay() {
    const display = document.getElementById('display');
	display.value = '';
}
function deleteLast() {
	const display = document.getElementById('display');
	display.value = display.value.slice(0, -1);
}

function append(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let display = document.getElementById('display').value;
    display = display.replace('^', '**'); 
    display = display.replace('pi', 'Math.PI'); 

    try {
        document.getElementById('display').value = eval(display
            .replace('sin', 'Math.sin')
            .replace('cos', 'Math.cos')
            .replace('tan', 'Math.tan')
            .replace('log', 'Math.log')
            .replace('exp', 'Math.exp')
            .replace('sqrt', 'Math.sqrt')
        );
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }

}
function toggleScientific() {
    const scientificButtons = document.querySelector('.scientific-buttons');
    scientificButtons.classList.toggle('hidden');
}