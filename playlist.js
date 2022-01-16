let container = document.querySelector('.container');
let songsContainer = container.querySelector('.songs-container');
let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');

function renderAdded() {
    let songs = songsContainer.querySelectorAll('.song');
    let noSongsElement = container.querySelector('.no-songs')
    if (songs.length === 0) {
        resetButton.setAttribute('disabled', true);
        resetButton.classList.add('form__submit-btn_disabled');
        noSongsElement.classList.remove('no-songs_hidden');

    } else {
        resetButton.removeAttribute('disabled');
        resetButton.classList.remove('form__submit-btn_disabled');
        noSongsElement.classList.add('no-songs_hidden');
    }
}

function addSong() {
    let artist = container.querySelector('.input__text_type_artist')
    let song =container.querySelector('.input__text_type_song')
    songsContainer.innerHTML += `
        <div class="song">
            <h4 class="song__artist">${artist.value}</h4>
            <p class="song__title">${song.value}</p>
            <button class="song__like"></button>
        </div>
    `;
    renderAdded();
    artist.value = '';
    song.value = '';
}
addButton.addEventListener('click', function() {
    let artist = container.querySelector('.input__text_type_artist')
    let song =container.querySelector('.input__text_type_song')
    if (artist.value && song.value) {
        addSong();
    }
});
renderAdded();
resetButton.addEventListener('click', function(){
    let song = document.querySelectorAll('.song');
    for (let i = 0; i < song.length; i++) {
        song[i].remove();
        renderAdded();
    }
})
