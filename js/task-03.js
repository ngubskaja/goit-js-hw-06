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


const imageListEl = images.map((images) => `<li class = item ><img class = img src = ${images.url} alt = ${images.alt}></img></li>`);
// console.log(imageListEl);
const component = imageListEl.join(" ");
// console.log(component );

listEl.insertAdjacentHTML('afterbegin', component);





// const itemEl = [];
// images.forEach(function(images){
//   itemEl.push(`<li class = item ><img class = img src = ${images.url} alt = '${images.alt}'></img></li>`);
 
// });
 
// const component = itemEl.join(" ");
// console.log(component);

// listEl.insertAdjacentHTML("afterbegin", component);


 // Завдання 3 доцільніше виконати з використанням методу меп - він самостійно повертає новий масив 
// (немає потреби створювати масив власноруч і пушити в нього). 


