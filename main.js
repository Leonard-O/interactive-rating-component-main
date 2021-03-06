const main = document.querySelector('.main');
const card = document.querySelector('.card');
const submit = document.querySelector('#submit');
const btnS = document.querySelector('#btnS');
const span = document.querySelector('span');
const back = document.querySelector('#back');

let value = '';
toggleDisabled(true);

// toggleDisabled function

function toggleDisabled(bool) {
    if (bool) {
        submit.setAttribute('disabled', 'disabled');
    } else {
        submit.removeAttribute('disabled');
    }
}

btnS.addEventListener('click', (event) => {
    value = event.target.innerText;
    span.innerText = value;

    toggleDisabled(false);
});

submit.addEventListener('click', () => {
    main.style.display = 'none';
    card.style.display = 'block';

    back.addEventListener('click', () => {
        card.style.display = 'none';
        main.style.display = 'block';

        value = '';
        toggleDisabled(true);
    });
});