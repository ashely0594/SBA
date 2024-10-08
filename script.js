 const heading = document.getElementById('main-title');

 heading.textContent = 'Frank Ocean and his Creative Projects';
 


const list = document.getElementById("albums");

if (list.lastElementChild) {
   list.removeChild(list.lastElementChild);
}

const two = document.getElementById('two');
two.classList.add('gray');

const newImage = document.createElement('img');

newImage.setAttribute('src','https://th.bing.com/th/id/OIP.ZQJe1isoBpFjJCuJfAFgrAHaLc?rs=1&pid=ImgDetMain' );
 two.appendChild(newImage);

 const three = document.getElementById('three');
 three.classList.add('yellow');

 const newGif = document.createElement('img');
 newGif.setAttribute('src','https://www.bing.com/th/id/OGC.33199e99cace2cfdb2be9655497eea9f?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f3oz8xu5AneFXV9QSJO%2fgiphy.gif&ehk=VVC1IoWFc7YAMyXLS5OVUgN%2byxWMk80pHL6jQkFxuSM%3d');
three.appendChild(newGif);
 

 const five = document.getElementById('five');
 five.classList.add('green');

 const secondGif = document.createElement('img');
 secondGif.setAttribute('src','https://www.bing.com/th/id/OGC.141ac56342758156da371809b8a4ac56?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fzHeQWiJaX0oAAAAC%2ffrank-frankocean.gif&ehk=j8sb%2br4jh0VPBFvRuKr1A6X5d6gR2XJkTqdRzPP6B8s%3d');
five.appendChild(secondGif);
 

const four = document.getElementById('four');
 four.classList.add('black');

 const thirdGif = document.createElement('img');
 thirdGif.setAttribute('src','https://media1.tenor.com/m/LvqG6dvSYFEAAAAd/frank-ocean-endless.gif');
 four.appendChild(thirdGif);


document.body.style.backgroundImage = 'url(https://wallpapers.com/images/high/frank-ocean-in-blonde-helmet-aoai04qxdqno539u.webp)';
document.body.style.backgroundSize = "cover"; 

const toggleButton = document.getElementById('toggle-menu');
const albums = document.querySelector('#albums');

toggleButton.addEventListener('click', () => {
    albums.classList.toggle('show'); 
});

document.addEventListener('click', (event) => {
   if (!toggleButton.contains(event.target) && !albums.contains(event.target)) {
      albums.classList.remove('show');
   }
});

