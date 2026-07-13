document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");
    const body = document.querySelector("body");

    if (!input || !body) return;
    input.focus();

    const setValue = value => {
        input.value = value;
        input.focus();
    };

    const isValidExpression = expression => {
        return /^[-+*/%()\d.\s]+$/.test(expression);
    };

    const calculate = () => {
        const expression = input.value.trim();
        if (!expression) return;
        if (!isValidExpression(expression)) {
            setValue("Error");
            return;
        }

        try {
            setValue(eval(expression));
        } catch {
            setValue("Error");
        }
    };

    input.addEventListener("input", e => {
        if (e.target.value === "Error") {
            input.value = "";
        }
    });

    body.addEventListener("click", e => {
        const target = e.target;
        if (!target.matches("button")) return;

        const buttonValue = target.textContent.trim();

        if (buttonValue === "AC") {
            setValue("");
            return;
        }

        if (buttonValue === "⌫") {
            setValue(input.value.slice(0, -1));
            return;
        }

        if (buttonValue === "=") {
            calculate();
            return;
        }

        if (input.value === "Error") {
            setValue("");
        }

        input.value += buttonValue;
        input.focus();
    });

    input.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            calculate();
            return;
        }

        if (e.key === "Escape") {
            e.preventDefault();
            setValue("");
            return;
        }

        if (e.key === "Backspace" || e.key === "Delete") {
            return;
        }

        const allowedKeys = "0123456789+-*/%.()";
        if (e.key.length === 1 && !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    });
});
