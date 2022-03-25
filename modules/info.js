const mealsUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=pork';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/muC92fOKTY2CMO5MPWsS/likes/';

export default class Info {
  getMeals = async () => {
    let meals = [];
    const response = await fetch(mealsUrl);
    meals = await response.json();
    return meals.meals;
  }

  getLikes = async () => {
    let likes = [];
    const likesHash = {};
    const response = await fetch(likesUrl);
    likes = await response.json().catch(() => false);
    if(!likes) return false;
    likes.forEach((e) => {
      likesHash[e.item_id] = e.likes;      
    });
    return likesHash;
  }
}