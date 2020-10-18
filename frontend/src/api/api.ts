import Axios from 'axios';

export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

export async function searchCocktailsByIngredient(ingredient: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const cocktails = await Axios.get(url);
    return cocktails.data.drinks.map((cocktail: Cocktail, index:number) => cocktail);
}