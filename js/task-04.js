const buttonDecrEl = document.querySelectorAll(`button`)[0];
console.log(buttonDecrEl);
const buttonIncrEl = document.querySelectorAll(`button`)[1];
console.log(buttonIncrEl);
const componentSpanEl = document.querySelector(`span`);
console.log(componentSpanEl);

let counterValue = 0;

buttonDecrEl.addEventListener('click', (event) => {
    counterValue = counterValue -1;
    componentSpanEl.textContent = counterValue;
});

buttonIncrEl.addEventListener('click', (event) => {
    counterValue = counterValue += 1;
    componentSpanEl.textContent = counterValue;
});

