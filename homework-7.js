// Задание №1

function weather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}
weather('Медина', '40')


let city = "Медина";
let temperature = "40";
let message = `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`
console.log(message)

// Задание №2

const LIGHT_SPEED = 299792458;
const speed = LIGHT_SPEED;

    if (speed > LIGHT_SPEED) {
        console.log('Сверхсветовая скорость')
    } else if (speed < LIGHT_SPEED) {
        console.log('Субсветовая скорость')
    } else {
        console.log('Скорость света')
    }

// Задание №3

let tea = 'Чай Липтон';
let price = 500;
let budget = 350;

    if (budget >= price) {
        console.log(`${tea} приобретён. Спасибо за покупку!`)
    } else {
        console.log(`Вам не хватает ${price - budget}$, пополните баланс`)
    }

// Задание №4

function greet () {

}

// Задание №5

let name = 'Ислам';
let age = 33;
const BOILING_TEMP = 100;