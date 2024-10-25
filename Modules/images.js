//images.js
export function createNewImage() {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'https://th.bing.com/th/id/OIP.ZQJe1isoBpFjJCuJfAFgrAHaLc?rs=1&pid=ImgDetMain');
    return newImage;
}

export function createBackgroundImage() {
    document.body.style.backgroundImage = 'url(https://wallpapers.com/images/high/frank-ocean-in-blonde-helmet-aoai04qxdqno539u.webp)';
    document.body.style.backgroundSize = "cover";
}