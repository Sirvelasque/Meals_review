const url ='https://www.themealdb.com/api/json/v1/1/filter.php?i=pork';
export default class App {
  static scores = [];
  async refresh() {
    const response = await fetch(url);
    this.scores = await response.json();
    // this.response = await fetch(url).then((response) => response.json());
    // this.scores = this.response.result;
    
    console.log(this.scores.meals[0].idMeal);
  }
}