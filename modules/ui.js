import Info from './info.js';

const info = new Info();

const display = (title, image) => {
  const section = document.getElementById('app');
  const box = document.createElement('div');
  const imageContainer = document.createElement('div');
  const textLike = document.createElement('div');
  const comment = document.createElement('button');
  box.classList.add('box');
  imageContainer.classList.add('image');
  textLike.classList.add('title_like');
  imageContainer.innerHTML = `<img src='${image}'>`;
  textLike.innerHTML = `<div class="title">${title}</div><div class='like'></div>`;
  comment.innerHTML = 'Comment';
  box.appendChild(imageContainer);
  box.appendChild(textLike);
  box.appendChild(comment);
  section.appendChild(box);
};

const init = async () => {
  let meals = [];
  meals = await info.getMeals();
  meals.forEach((item) => {
    display(item.strMeal, item.strMealThumb);
  });
};

const likes = async () => {
};

export {
  init, likes,
};