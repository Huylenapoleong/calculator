document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('scre');
    const buttons = document.querySelectorAll('button');
    let screenValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.innerText;

            if (buttonText === 'AC') {
                screenValue = '';
                screen.innerText = '0';
            } else if (buttonText === '+/-') {
                screenValue = screenValue ? String(-parseFloat(screenValue)) : '0';
                screen.innerText = screenValue;
            } else if (buttonText === '%') {
                screenValue = screenValue ? String(parseFloat(screenValue) / 100) : '0';
                screen.innerText = screenValue;
            } else if (buttonText === '=') {
                try {
                    screenValue = eval(screenValue.replace('x', '*').replace(',', '.'));
                    screen.innerText = screenValue;
                } catch {
                    screen.innerText = 'Error';
                }
            } else {
                if (screenValue === '0' && buttonText !== ',') {
                    screenValue = buttonText;
                } else {
                    screenValue += buttonText;
                }
                screen.innerText = screenValue;
            }
        });
    });
});
