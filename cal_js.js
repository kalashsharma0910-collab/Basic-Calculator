document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");
    const body = document.querySelector("body");

    if (!input || !body) return;
    input.focus();

    let isErrorDisplayed=false;

    const setValue=(val)=>{
        input.value = val;
        isErrorDisplayed = val === "Error";
        input.focus();
    };
const isValidExpression = exp => {
        return /^[-+*/%()\d.\s]+$/.test(exp);
    };
const calculate = () => {
        const expr= input.value.trim();
        if (!expr) return;
        if (!isValidExpression(expr)) {
            setValue("Error");
            return;
        }

        try {
            setValue(eval(expr));
        } catch {
            setValue("Error");
        }
    };



    input.addEventListener("input",e=>{
        if (!isErrorDisplayed) 
          return;

        const currVal=e.target.value;
        const newValue=currVal.replace(/^Error/, "");
        input.value=newValue;
        isErrorDisplayed=false;
        input.focus();
    });

    body.addEventListener("click",e=>{
        const target = e.target;
        if (!target.matches("button")) 
            return;

        const buttonValue=target.textContent.trim();

        if (buttonValue=="AC") 
            {
            setValue("");
            return;
        }

        if (buttonValue=="⌫")
             {
            setValue(input.value.slice(0,-1));
            return;
        }

        if (buttonValue==="=") 
            {
            calculate();
            return;
        }

        if (input.value==="Error") {
            setValue("");
        }
        

        input.value += buttonValue;
        input.focus();
    });

    input.addEventListener("keydown", e => {
        if(e.key==="Enter") 
            {
            e.preventDefault();
            calculate();
            return;
        }

        if (e.key==="Escape") {
            e.preventDefault();
            setValue("");
            return;
        }
        if (e.key==="Backspace"||e.key==="Delete") 
            {
            return;
        }

       
    });
});