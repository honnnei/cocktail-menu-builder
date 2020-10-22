import React from 'react'

export default function SearchText() {

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
        <div className=".container-fluid">
            <p className="bg-light lead">
                {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda suscipit totam! Explicabo iste molestias at nobis voluptatum modi architecto, beatae laborum delectus, quae ratione reiciendis expedita molestiae ipsa velit?".split("").map((letter, index) => (
                        <span className={colorArray[colorIndex(colorArray, index)]}>
                            {letter}
                        </span>
            ))}</p>
        </div>
    )
}
