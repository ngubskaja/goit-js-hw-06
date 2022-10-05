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
  }else{
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  };

}


// Також завважте: виводити дані в консоль слід саме як об'єкт.






