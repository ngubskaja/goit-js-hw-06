/* <form class="login-form">
<label>
  Email
  <input type="email" name="email" />
</label>
<label>
  Password
  <input type="password" name="password" />
</label>
<button type="submit">Login</button>
</form> */

// !! Обработка отправки формы form.login-form должна быть по событию submit. 
// !! При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// !!!Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет
//  именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


// добрейший вечерок. скажите пожалуйста, как в 8 задании делать это?          
//  1. -Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// -Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.



const formEl = document.querySelector('.login-form');
const inputEl = document.querySelector('.password');

formEl .addEventListener('submit',  onFormSubmit);

function onFormSubmit(event){
event.preventDefault();

const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}


// console.log(event.currentTarget.elements);

// const formData = new FormData(event.currentTarget);

// formData.forEach((value, name) =>{
//     console.log('onFormSubmit => name', name);
//     console.log('onFormSubmit => value', value);
//     if( === "" ||  === ""){
//         alert('минус');
//     }else{
//         alert('плюс');
//     }
    
// });

// }


// const form = document.querySelector(".login-form");
// form.addEventListener("submit", (event) => { // обов'язково передаєм event параметром
//     event.preventDefault(); //недаємо перезавантажити сторінку
//     const {elements: { email, password }} = event.currentTarget; //отримуємо значення полів форми
//     // if (email.value === "" || password.value === "") { //перевіряємо чи є пусті поля
//     //   alert("Всі поля повинні бути заповнені!");
//     // } else {
//     console.log({ "email": email.value, "password": password.value });//виводимо об'єкт в консоль
//     //   form.reset();//скидаємо форму
//     // }
//   });


