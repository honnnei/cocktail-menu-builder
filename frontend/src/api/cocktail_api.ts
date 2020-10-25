import Axios from 'axios';
import { CocktailOriginal, Cocktail, DrinkDetails, DrinkDetailsEdited } from '../types/types';

export async function searchCocktailsByIngredient(ingredient: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const cocktails = await Axios.get(url);
    if (cocktails.data.drinks) {
        return cocktails.data.drinks.map((drink: CocktailOriginal, index:number) => ({
            id: drink.idDrink,
            name: drink.strDrink,
            image_url: drink.strDrinkThumb
        }));
    }
    return `There is no such ingredient: '${ingredient}'.`;
}

export async function searchCocktailByName(name: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
    const cocktails = await Axios.get(url);
    const regex = /strIngredient/;
    if (cocktails.data.drinks) {
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
    return `There is no cocktails with a name: '${name}'.`;
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
    return cocktails.data.drinks.map((drink: CocktailOriginal, index:number) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        image_url: drink.strDrinkThumb
    }));
}