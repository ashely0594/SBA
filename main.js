// main.js

import { createNewGif, createSecondGif, createThirdGif } from './Modules/gif.js';
import { toggleMenuHandler, formSubmitHandler } from './Modules/events.js';
import { heading, list, two, three, four, five, toggleButton, albums, form, successMessage, errorMessage } from './Modules/domElements.js';
import { createNewImage, createBackgroundImage } from './Modules/images.js';



heading.textContent = 'Frank Ocean and his Creative Projects';

if (list.lastElementChild) {
   list.removeChild(list.lastElementChild);
}

two.classList.add('gray');

// Add the new image to "two"
const newImage = createNewImage();
two.appendChild(newImage);


three.classList.add('yellow');
createNewGif(three); // Adding the first GIF to 'three'


five.classList.add('green');
createSecondGif(five); // Adding the second GIF to 'five'


four.classList.add('black');
createThirdGif(four); // Adding the third GIF to 'four'

createBackgroundImage();


// Toggle menu functionality
toggleMenuHandler(toggleButton, albums);



// Favorite album form submission
formSubmitHandler(form, successMessage, errorMessage);



