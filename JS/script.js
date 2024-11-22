const scrollButton1 = document.querySelector('.quick-recipe-btn');
const targetSection1 = document.querySelector('.quick-easy-recipe-container');

const scrollButton2 = document.querySelector('.dinner-recipe-btn');
const targetSection2 = document.querySelector('.dinner-recipe-container');

const scrollButton3 = document.querySelector('.vegetarian-recipe-btn');
const targetSection3 = document.querySelector('.vegetarian-recipe-container');

const scrollButton4 = document.querySelector('.healthy-recipe-btn');
const targetSection4 = document.querySelector('.healthy-recipe-container');

const scrollButton5 = document.querySelector('.instant-pot-recipe-btn');
const targetSection5 = document.querySelector('.instant-pot-recipe-container');

const scrollButton6 = document.querySelector('.vegan-recipe-btn');
const targetSection6 = document.querySelector('.vegan-recipe-container');

const scrollButton7 = document.querySelector('.meal-prep-recipe-btn');
const targetSection7 = document.querySelector('.meal-prep-recipe-container');

const scrollButton8 = document.querySelector('.soups-recipe-btn');
const targetSection8 = document.querySelector('.soups-recipe-container');

const scrollButton9 = document.querySelector('.salads-recipe-btn');
const targetSection9 = document.querySelector('.salads-recipe-container');

scrollButton1.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection1.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollButton2.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection2.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollButton3.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection3.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollButton4.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection4.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollButton5.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection5.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollButton6.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection6.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollButton7.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection7.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollButton8.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection8.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollButton9.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection9.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
