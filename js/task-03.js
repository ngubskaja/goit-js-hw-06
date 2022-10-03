const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl = document.querySelector('.gallery');
console.log(listEl);

const itemEl = [];
images.forEach(function(images){
  itemEl.push(`<li class = item ><img class = img src = ${images.url} alt = ${images.alt}></img></li>`);
 
});
 
const component = itemEl.join(" ");
console.log(component);

listEl.insertAdjacentHTML("afterbegin", component);



// listEl.insertAdjacentHTML("afterbegin", "<li></li><li></li><li></li>");

// const items = [ `<li><img src = ${images.url} alt = ${images.alt}></img></li>`, 
// `<li><img src = ${images.url} alt = ${images.alt}></img></li>`,
// `<li><img src = ${images.url} alt = ${images.alt}></img></li>`];
// for (const item of items) {
//   console.log(items);
// }

// listEl.append(items);
// const items = [
//   `<li><img src = ${images.url} alt = ${images.alt}></img></li>`,
//   `<li><img src = ${images.url} alt = ${images.alt}></img></li>`,
//   `<li><img src = ${images.url} alt = ${images.alt}></img></li>`
// ];

// const itemEl = document.querySelector('li');
// console.log(itemEl);


// const firstImgEl = document.createElement(`img`);
// firstImgEl.scr = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
// firstImgEl.alt = `White and Black Long Fur Cat`;

// const itemEl = createElement(`li`);
// itemEl.innerHTML = `<img src= ${`images.url`} alt = ${`images.alt`}>`;

// const firstItemEl = document.createElement(`li`);
// console.log(firstItemEl);

// listEl.insertAdjacentHTML("beforeend", "<img src = ${images.url} alt = ${images.alt}> </img> " );

