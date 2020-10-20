import Axios from 'axios';

export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

export type DrinkDetailsEdited = {
    id: string,
    alcoholic: string,
    category: string,
    name: string,
    glass: string,
    image_url: string,
    instructions: string,
    drinkIngredients: string[],
}

export type DrinkDetails = {
    id: string,
    alcoholic: string,
    category: string,
    name: string,
    glass: string,
    image_url: string,
    instructions: string,
    dateModified: string,
    drinkIngredients: string[],
    idDrink: string,
    strAlcoholic: string,
    strCategory: string,
    strCreativeCommonsConfirmed: string,
    strDrink: string,
    strDrinkAlternate: string,
    strDrinkDE: string,
    strDrinkES: string,
    strDrinkFR: string,
    strDrinkThumb: string,
    strDrinkZHHANS: string,
    strDrinkZHHANT: string,
    strGlass: string,
    strIBA: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strInstructions: string,
    strInstructionsES: string,
    strInstructionsFR: string,
    strInstructionsZHHANS: string,
    strInstructionsZHHANT: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11: string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string,
    strTags: string,
    strVideo: string,
}

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
