function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
console.log(bodyEl);

const spanEl = document.querySelector('.color');
console.log(spanEl);

const btnEl = document.querySelector('.change-color');
console.log(btnEl);



btnEl.addEventListener('click', (event) => {
  const changeColor =  getRandomHexColor();
bodyEl.style.backgroundColor = changeColor;
spanEl.textContent = changeColor;
});


