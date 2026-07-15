document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");
    const body = document.querySelector("body");

    if (!input||!body)
         return;


    input.focus();
let isErrDisp=false;

    const setValue=(val)=>{
        input.value = val;
        isErrDisp = val === "Error";
        input.focus();
    };
const isvalidexpr=exp=>{
        return /^[-+*/%()\d.\s]+$/.test(exp);
    };
const calculate = () => {
        const expr= input.value.trim();
        if (!expr) return;
        if (!isvalidexpr(expr)) {
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
        if (!isErrDisp) 
          return;
const currVal=e.target.value;
        const newVal=currVal.replace(/^Error/, "");
        input.value=newVal;
        isErrDisp=false;
        input.focus();
    });
body.addEventListener("click",e=>{
    const target = e.target;
if(!target.matches("button")) 
return;

const button=target.textContent.trim();
if(button=="AC") 
            {
            setValue("");
            return;
        }
if(button=="⌫") 
             {
            setValue(input.value.slice(0,-1));
            return;
        }
if(button==="=") 
            {
            calculate();
            return;
        }
if (input.value==="Error") {
            setValue("");
        }
        input.value += button;
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
        if(e.key==="Backspace"||e.key==="Delete") 
{
return;
}

    });
});
