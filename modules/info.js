const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=pork';

export default class Info {
  getMeals = async () => {
    let meals = [];
    const response = await fetch(url);
    meals = await response.json();
    return meals.meals;
  }
}