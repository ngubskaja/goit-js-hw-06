const inputEl = document.querySelector(`#name-input`);
console.log(inputEl);

const outputEl = document.querySelector(`#name-output`);
console.log(outputEl);

inputEl.addEventListener('input', (event) => {
    if(inputEl.value){
        outputEl.textContent = event.currentTarget.value;
    }else
    outputEl.textContent = 'Anonymous';
});




// outputEl.addEventListener('output', (event) => {
//     if(inputEl === 'hi'){
//         outputEl.textContent = 'Anonymous';
//     };
// });
