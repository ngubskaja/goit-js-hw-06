// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];



const itemPotatoesEl = document.createElement(`li`);
itemPotatoesEl.textContent = `Potatoes`;
itemPotatoesEl.classList.add(`item`);
console.log(itemPotatoesEl);

const itemMushroomstEl = document.createElement(`li`);
itemMushroomstEl.textContent = `Mushrooms`;
itemMushroomstEl.classList.add(`item`);
console.log(itemMushroomstEl);

const itemGarlicEl = document.createElement(`li`);
itemGarlicEl.textContent = `Garlic`;
itemGarlicEl.classList.add(`item`);
console.log(itemGarlicEl);

const itemTomatosEl = document.createElement(`li`);
itemTomatosEl.textContent = `Tomatos`;
itemTomatosEl.classList.add(`item`);
console.log(itemTomatosEl);

const itemHerbsEl = document.createElement(`li`);
itemHerbsEl.textContent = `Herbs`;
itemHerbsEl.classList.add(`item`);
console.log(itemHerbsEl);

const itemCondimentsEl = document.createElement(`li`);
itemCondimentsEl.textContent = `Condiments`;
itemCondimentsEl.classList.add(`item`);
console.log(itemCondimentsEl);



const listEl = document.querySelector('ul#ingredients');
listEl.append(itemPotatoesEl, itemMushroomstEl, itemGarlicEl, itemTomatosEl, itemHerbsEl, itemCondimentsEl);