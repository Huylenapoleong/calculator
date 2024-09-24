document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('scre');
    const buttons = document.querySelectorAll('.fingerboard button');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (!isNaN(value) || value === '0') {
                // Nếu là nút số, thêm nó vào currentInput
                currentInput += value;
                screen.textContent = currentInput;
            } else if (value === ',') {
                // Thêm dấu phẩy
                if (!currentInput.includes(',')) {
                    currentInput += ',';
                    screen.textContent = currentInput;
                }
            } else if (value === '=') {
                // Tính toán khi nhấn '='
                if (previousInput !== '' && currentInput !== '') {
                    const result = calculate(previousInput, currentInput, operator);
                    screen.textContent = result;
                    currentInput = result; // Đặt kết quả làm currentInput
                    previousInput = '';
                    operator = '';
                }
            } else {
                // Nếu là nút toán học
                if (currentInput !== '') {
                    previousInput = currentInput;
                    currentInput = '';
                }
                operator = value;
            }
        });
    });

    function calculate(prev, curr, op) {
        prev = parseFloat(prev.replace(',', '.'));
        curr = parseFloat(curr.replace(',', '.'));
        switch (op) {
            case '+':
                return prev + curr;
            case '-':
                return prev - curr;
            case 'x':
                return prev * curr;
            case ':':
                return curr !== 0 ? prev / curr : 'Error';
            default:
                return curr;
        }
    }
});