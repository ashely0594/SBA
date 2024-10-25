// Modules/gif.js

export function createNewGif(parentElement) {
    const newGif = document.createElement('img');
    newGif.setAttribute('src', 'https://www.bing.com/th/id/OGC.33199e99cace2cfdb2be9655497eea9f?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f3oz8xu5AneFXV9QSJO%2fgiphy.gif&ehk=VVC1IoWFc7YAMyXLS5OVUgN%2byxWMk80pHL6jQkFxuSM%3d');
    parentElement.appendChild(newGif);
}

export function createSecondGif(parentElement) {
    const secondGif = document.createElement('img');
    secondGif.setAttribute('src', 'https://www.bing.com/th/id/OGC.141ac56342758156da371809b8a4ac56?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fzHeQWiJaX0oAAAAC%2ffrank-frankocean.gif&ehk=j8sb%2br4jh0VPBFvRuKr1A6X5d6gR2XJkTqdRzPP6B8s%3d');
    parentElement.appendChild(secondGif);
}

export function createThirdGif(parentElement) {
    const thirdGif = document.createElement('img');
    thirdGif.setAttribute('src', 'https://media1.tenor.com/m/LvqG6dvSYFEAAAAd/frank-ocean-endless.gif');
    parentElement.appendChild(thirdGif);
}
