module.exports = ({menuname, drinks}) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <style>

        </style>
    </head>
    <body>
        <img src='${drinks[0].image_url}' height="200" width="200" />
        <div>
            <h1>${menuname}</h1>
        </div>
        <div>
        <ul>
        <li>${drinks.map(drink =>`
            <li>${drink.name}</li>
            <li>${drink.drinkIngredients.map(ing => ing + ', ')}</li>
        `)}</li>
        </ul>
        </div>
        
    </body>
    </html>`
};