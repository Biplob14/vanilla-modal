const modal = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.close-btn');
const modalOpen = document.querySelector('.modal-btn');

modalOpen.addEventListener('click', function() {
    console.log(modal.classList);

    modal.classList.add('open-modal');
});

modalClose.addEventListener('click', function() {
    modal.classList.remove('open-modal');
});