let response = '';
let data = '';

async function fetchJson() {
    response = await fetch('data.json');
    data = await response.json();
}

fetchJson();

const btnDaily = document.querySelector('.btn-daily');
const btnWeekly = document.querySelector('.btn-weekly');
const btnMonthly = document.querySelector('.btn-monthly');
let allCards = document.querySelectorAll('.card-content');

btnDaily.addEventListener('click', (e) => {

    cleanActive();
    btnDaily.classList.add('active');

    for (let i = 0; i < allCards.length; i++) {

        if (data[i].timeframes.daily.current > 1) {
            allCards[i].querySelector('h1').innerHTML = `${data[i].timeframes.daily.current}hrs`;
        }
        else {
            allCards[i].querySelector('h1').innerHTML = `${data[i].timeframes.daily.current}hr`;
        }
        if (data[i].timeframes.daily.previous > 1) {
            allCards[i].querySelector('p').innerHTML = `Last Day - ${data[i].timeframes.daily.previous}hrs`;
        }
        else {
            allCards[i].querySelector('p').innerHTML = `Last Day - ${data[i].timeframes.daily.previous}hr`;
        }
    }
})

btnWeekly.addEventListener('click', (e) => {

    cleanActive();
    btnWeekly.classList.add('active');

    for (let i = 0; i < allCards.length; i++) {

        if (data[i].timeframes.weekly.current > 1) {
            allCards[i].querySelector('h1').innerHTML = `${data[i].timeframes.weekly.current}hrs`;
        }
        else {
            allCards[i].querySelector('h1').innerHTML = `${data[i].timeframes.weekly.current}hr`;
        }
        if (data[i].timeframes.weekly.previous > 1) {
            allCards[i].querySelector('p').innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
        }
        else {
            allCards[i].querySelector('p').innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hr`;
        }
    }
})

btnMonthly.addEventListener('click', (e) => {

    cleanActive();
    btnMonthly.classList.add('active');

    for (let i = 0; i < allCards.length; i++) {

        if (data[i].timeframes.monthly.current > 1) {
            allCards[i].querySelector('h1').innerHTML = `${data[i].timeframes.monthly.current}hrs`;
        }
        else {
            allCards[i].querySelector('h1').innerHTML = `${data[i].timeframes.monthly.current}hr`;
        }
        if (data[i].timeframes.monthly.previous > 1) {
            allCards[i].querySelector('p').innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
        }
        else {
            allCards[i].querySelector('p').innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hr`;
        }
    }
})

function cleanActive() {
    btnDaily.classList.remove('active');
    btnWeekly.classList.remove('active');
    btnMonthly.classList.remove('active');
}