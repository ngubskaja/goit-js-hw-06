const itemCategoriesEl = document.querySelector(`#categories`);


const liOfCategoriesEl = itemCategoriesEl.querySelectorAll(`li.item`);
console.log(`Number of categories:`, liOfCategoriesEl.length);

const counter = parent => { return parent.childElementCount };
const message = elements => {
    elements.forEach(element => {
        const firstElem = element.firstElementChild;
        const secondElem = firstElem.nextElementSibling
        console.log(`Category: ${firstElem.textContent}`);
        console.log(`Elements: ${counter(secondElem)}`);
    });
};

const subCategories = categories.querySelectorAll('.item');
message(subCategories);