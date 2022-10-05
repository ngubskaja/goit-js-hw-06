// const textInputEl = document.querySelector('#validation-input');
const lengthInputEl = document.querySelector('[data-length="6"]');
// console.log(lengthInputEl.dataset.length);
const inputEl = document.querySelector('input');


inputEl.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length == lengthInputEl.dataset.length){
        inputEl.classList.add("valid");
        inputEl.classList.remove('invalid');
    } else{
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
}
});







// https:monosnap.com/file/UmwRejaiTE5FuPtqQb2uo2ItSALTv5 не вказуйте число явно - звертайтесь до значення дата-атрибуту через скрипт.





// let inputEl = document.querySelector('#validation-input');
// let inputLength = inputEl.dataset.length;
// const input = document.querySelector('input');

// inputEl.addEventListener('blur', e => {
// const text = e.target.value;
//   if (text.length === +inputLength) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.remove('valid');
//     inputEl.classList.add('invalid');
//   }
// });


// textInputEl.addEventListener(`blur`, (event) => {
//     inputEl.textContent = event.currentTarget.value;
//     inputDatalength = textInputEl.textContent.length;
// });


// if(inputDatalength === lengthInputEl.dataset.length){
//     textInputEl.classList.add('valid');
// } else{
//     textInputEl.classList.add('invalid');
// }


// textInputEl.addEventListener(`output`, (event) => {
//     if(inputDatalength === lengthInputEl.dataset.length){
//         textInputEl.classList.add('valid');
//     } else{
//         textInputEl.classList.add('invalid');
//     }
// });



