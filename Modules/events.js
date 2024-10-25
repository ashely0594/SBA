// Modules/events.js

export function toggleMenuHandler(toggleButton, albums) {
    toggleButton.addEventListener('click', () => {
        albums.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!toggleButton.contains(event.target) && !albums.contains(event.target)) {
            albums.classList.remove('show');
        }
    });
}

export function formSubmitHandler(form, successMessage, errorMessage) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const album = document.getElementById('album').value.trim();

        if (album.length === 0) {
            errorMessage.textContent = 'Please enter your favorite album.';
            successMessage.textContent = '';
        } else {
            successMessage.textContent = `Your favorite album "${album}" has been submitted!`;
            errorMessage.textContent = '';
            alert(`Your favorite album is: ${album}`);
            form.reset();
        }
    });
}
