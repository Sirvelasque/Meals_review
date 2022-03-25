import { porkMealsUrl, likesUrl } from './urlHandler.js';

export default class Info {
  getMeals = async () => {
    let meals = [];
    const response = await fetch(porkMealsUrl);
    meals = await response.json();
    return meals.meals;
  };

  getLikes = async () => {
    let likes = [];
    const likesHash = {};
    const response = await fetch(likesUrl);
    likes = await response.json().catch(() => false);
    if (!likes) return false;
    likes.forEach((e) => {
      likesHash[e.item_id] = e.likes;
    });
    return likesHash;
  };

  addLike = async (id) => {
    await fetch(likesUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
  }
}