const itemCategoriesEl = document.querySelector(`#categories`);
console.log(itemCategoriesEl);

const liOfCategoriesEl = itemCategoriesEl.querySelectorAll(`li.item`);

console.log(`Number of categories:`, liOfCategoriesEl.length);

const counter = parent => { return parent.childElementCount };
const message = elements => {
    elements.forEach(element => {
        const firstElem = element.firstElementChild;
        // const secondElem = firstElem.nextElementSibling;
        const lastElem = element.lastElementChild;
        console.log(`Category: ${firstElem.textContent}`);
        console.log(`Elements: ${counter(lastElem )}`);
    });
};

const subCategories = categories.querySelectorAll('.item');
message(subCategories);