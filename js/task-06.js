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



