import Info from './info.js';

const info = new Info();

const like = async (id, num) => {
  const counter = document.querySelector(`.likesCounter${id}`);
  if (num) {
    counter.innerHTML = `${num}`;
  } else {
    counter.innerHTML = '0';
  }
};

const newlike = async (id) => {
  await info.addLike(id);
  let likes = {};
  likes = await info.getLikes();
  await like(id, likes[id]);
};

const display = (title, image, id) => {
  // Create elements
  const section = document.getElementById('app');
  const box = document.createElement('div');
  const imageContainer = document.createElement('div');
  const textLike = document.createElement('div');
  const likebox = document.createElement('div');
  const likeBtn = document.createElement('div');
  const likeCounter = document.createElement('div');
  const comment = document.createElement('button');

  // Give them class
  box.classList.add('box');
  imageContainer.classList.add('image');
  textLike.classList.add('title_like');
  likebox.classList.add('likebox');
  likeCounter.classList.add(`likesCounter${id}`);
  likeBtn.classList.add('like');

  // Content
  imageContainer.innerHTML = `<img src='${image}'>`;
  textLike.innerHTML = `<div class="title">${title}</div>`;
  comment.innerHTML = 'Comment';

  // Events
  likeBtn.addEventListener('click', () => {
    newlike(id);
  });

  // Append
  likebox.appendChild(likeCounter);
  likebox.appendChild(likeBtn);
  textLike.appendChild(likebox);
  box.appendChild(imageContainer);
  box.appendChild(textLike);
  box.appendChild(comment);
  section.appendChild(box);
};

const itemCounter = () => {
  const count = document.querySelectorAll('.box');
  return count.length;
};

const init = async () => {
  let meals = [];
  let likes = {};
  meals = await info.getMeals();
  likes = await info.getLikes();
  meals.forEach((item) => {
    display(item.strMeal, item.strMealThumb, item.idMeal);
    like(item.idMeal, likes[item.idMeal]);
  });
  const Ingredient = document.querySelector('.active');
  const counter = itemCounter();
  Ingredient.innerHTML += ` (${counter})`;
};

export {
  init, itemCounter,
};