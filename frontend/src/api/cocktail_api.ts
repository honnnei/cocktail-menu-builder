import Axios from 'axios';
import { Cocktail, DrinkDetails, DrinkDetailsEdited } from '../types/types';

export async function searchCocktailsByIngredient(ingredient: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const cocktails = await Axios.get(url);
    return cocktails.data.drinks.map((cocktail: Cocktail, index:number) => cocktail);
}

export async function getRandomCocktail() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const cocktail = await Axios.get(url);
    const regex = /strIngredient/;
    return cocktail.data.drinks.map((drink: DrinkDetails) => ({ 
        id: drink.idDrink,
        alcoholic: drink.strAlcoholic,
        category: drink.strCategory,
        name: drink.strDrink,
        glass: drink.strGlass,
        image_url: drink.strDrinkThumb,
        drinkIngredients: Object.keys(drink).filter((key: string) => regex.test(key) ? true : false).map((key: string) => drink[key]).filter((value) => value ? true : false),
        instructions: drink.strInstructions,
    }));
}


export async function getCocktailById(idArg: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idArg}`;
    const cocktails = await Axios.get(url);
    const regex = /strIngredient/;
    return cocktails.data.drinks.map((drink: DrinkDetails) => ({ 
        id: drink.idDrink,
        alcoholic: drink.strAlcoholic,
        category: drink.strCategory,
        name: drink.strDrink,
        glass: drink.strGlass,
        image_url: drink.strDrinkThumb,
        drinkIngredients: Object.keys(drink).filter((key: string) => regex.test(key) ? true : false).map((key: string) => drink[key]).filter((value) => value ? true : false),
        instructions: drink.strInstructions,
    }));

}

export async function filterByGlass(glass: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`;
    const cocktails = await Axios.get(url);
    return cocktails.data.drinks.map((cocktail: Cocktail, index: number) => cocktail);
}