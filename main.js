const main = document.querySelector('.main');
const card = document.querySelector('.card');
const submit = document.querySelector('#submit');
const btnS = document.querySelector('#btnS');
const span = document.querySelector('span');
const back = document.querySelector('#back');

btnS.addEventListener('click', (event) => {
    value = event.target.innerText;
    span.innerText = value;
});

submit.addEventListener('click', () => {
    if (value === '') {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
    main.style.display = 'none';
    card.style.display = 'block';

    back.addEventListener('click', () => {
        card.style.display = 'none';
        main.style.display = 'block';
    });
});