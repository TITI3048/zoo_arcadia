const likes = document.querySelectorAll('.like');

const likeStates = {};

likes.forEach((like) => {
    const card = like.closest('.card');
    const id = card.getAttribute('data-id');

    likeStates[id] = 0; 

    like.addEventListener('click', () => {
        if (likeStates[id] === 0) {
            like.classList.toggle('anim-like');
            likeStates[id] = 1; 
            like.style.backgroundPosition = 'right'; 
        } else {
            likeStates[id] = 0; 
            like.style.backgroundPosition = 'left'; 
        }
    });

    like.addEventListener('animationend', () => {
        like.classList.toggle('anim-like');
    });
});

const notif = document.querySelector('.notifications');
let countNotif = 0;

if (notif) { 
    notif.addEventListener('click', () => {
        notif.classList.toggle('anim-notif');
        countNotif++;
        if (countNotif > 0) {
            notif.style.backgroundPosition = 'right';
        }
    });

    notif.addEventListener('animationend', () => {
        notif.classList.toggle('anim-notif');
    });
}
