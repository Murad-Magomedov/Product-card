const productCard = document.querySelector('.product-list__item');
const changeCardColorBtn = document.querySelector('#change-card-color-btn');
const greenColorHash = '#37b7c3b6';
const pinkColorHash = '#f6039d6a';

changeCardColorBtn.addEventListener('click', () => {
    productCard.style.backgroundColor = greenColorHash;
})

const productCards = document.querySelectorAll('.product-list__item');
const changeAllcardColorBtn = document.querySelector('#change-allcard-color-btn');

changeAllcardColorBtn.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = pinkColorHash)
});

const openGoogleButton = document.querySelector('#open-google-btn');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google');

    if (answer === true) {
        window.open('http://google.com')
    } else {
        return;
    }
}

const outputLogButton = document.querySelector('#output-console-log-btn');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}


const pageTitle = document.querySelector('.page__title');

pageTitle.addEventListener('mouseenter', () => {
    console.log(pageTitle.textContent);
});

const changeBtnColorBtn = document.querySelector('#change-button-color-btn');

changeBtnColorBtn.addEventListener('click', () => {
    changeBtnColorBtn.classList.toggle('btn-active');
});