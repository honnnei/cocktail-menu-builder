import React from 'react'

export default function Header() {

    const colorArray: string[] = [
        "text-primary",
        "text-secondary",
        "text-success",
        "text-danger",
        "text-warning",
        "text-info"
    ]

    const colorIndex = (array: string[], index: number):number => {
        if (index < array.length) {
            return index;
        }
         return colorIndex(array, index - array.length);
    }


    return (
        <div className="jumbotron jumbotron-fluid" style={{margin: "0.5em"}}>
            <div className="container">
                <h1 className="display-3">
                    {"Cocktail Menu Builder".split("").map((letter, index) => (
                        <span className={colorArray[colorIndex(colorArray, index)]}>{letter}
                    </span>
                ))}
                </h1>
                <p className="lead">
                    Design a custom cocktail menu for your venue or event.
                </p>
            </div>
        </div>
    )
}
