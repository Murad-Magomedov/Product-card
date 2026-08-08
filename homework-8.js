// Задание №1 Создать объект субъекта.

const user = {
    firstName: "Мурад",
    lastName: "Магомедов",
    email: "muradmagomedov4111992@gmail.com",
    company: "IT MEDINA",
    jobTitle: "Product Manager",
    age: 33,
    country: "Саудовская Аравия",
    city: "Медина",
    relationshipStatus: "Холост",
    whatsapp: "+79884659836"
}

// Задание №2 Создать объект автомобиля.

const car = {
    brand: "BMW",
    model: "M4",
    generation: "F82",
    year: 2020,
    color: "Austin Yellow",
    transmission: "robotic",
    driveType: "RWD",
    // maxSpeed: 305
}

car.owner = user;
    console.log(car)

// Задание №3 Создать функцию максимальной скорости.

function checkMaxSpeed(automobile) {
    if(automobile.hasOwnProperty('maxSpeed')) {
        return;
    }
    automobile.maxSpeed = 250;
}

checkMaxSpeed(car);
console.log(car);

// Задание №4  Написать функцию, которая получает первым аргументом — объект,
// а вторым аргументом — свойство объекта.

function showModelAndColor(car, model, color) {
    console.log(car[model],car[color]);
}
showModelAndColor(car,'model', 'color');

// Задание №5 Создать массив.

const carBrand = ['Mercedes', 'Audi', 'BMW', 'Ferrari', 'Lamborghini']
    console.log(carBrand)

// Задание №6 Создать массив, состоящий из объектов.
// После, используя известный нам метод массив,
//  добавить еще одну книгу в конец списка.

const beginnerIslamicBooks = [
    {
        title: "Расскажи мне об Исламе",
        author: "Ахмад Хамад",
        yearOfPublication: 2016,
        coverColor: "Белый",
        genre: "Религиозно просветительская литература"
    },
    {
        title: "Жизнь Пророка Мухаммада(Да благословит его Аллах и приветствует)",
        author: "Сафи ар-Рахман аль-Мубаракфури",
        yearOfPublication: 1976,
        coverColor: "Темно-зеленый или Черный",
        genre: "Сира (Священная биография)"
    },
    {
        title: "Исламское вероубеждение",
        author: "Шейх Мухаммад ибн Салих аль-Усаймин",
        yearOfPublication: 1983,
        coverColor: "Синий или Коричневый",
        genre: "Акида (Догматика ислама)"
    },
    {
        title: "Три основы и их доказательства",
        author: "Мухаммад ибн Абдуль-Ваххаб (с комментариями Салиха аль-Фаузана)",
        yearOfPublication: "Оригинал — XVIII век (русские издания с разъяснением 2016–2021 гг.)",
        coverColor: "Бордовый или Черный",
        genre: "Таухид (Фундаментальное единобожие)"
    },
    {
        title: "Сады праведных",
        author: "Имам Абу Закария ан-Навави",
        yearOfPublication: "Оригинал — XIII век (издания на русском — 2008–2018 гг.)",
        coverColor: "Темно-синий или Черный",
        genre: "Практическая духовно-нравственная этика"
    }
]

beginnerIslamicBooks.push({
    title: "Книга Единобожия (с разъяснениями шейха Салиха аль-Фаузана)",
    author: "Мухаммад ибн Абдуль-Ваххаб",
    yearOfPublication: "Оригинал — XVIII век (современные русские издания 2014–2022 гг.)",
    coverColor: "Зеленый или Черный",
    genre: "Таухид (Фундаментальное единобожие)"
});

console.log(beginnerIslamicBooks);

// Задание №7 Создать еще один массив, состоящих из тех же книг,
//  но относящийся к определенной вселенной.
//  С помощью известного нам метода массива или оператора,
//  объединить эти два массива в один.

const beginnerEnglishIslamicBooks = [
    {
        title: "Tell Me About Islam",
        author: "Ahmad Hamad",
        yearOfPublication: 2016,
        coverColor: "White",
        genre: "Introductory Religious Literature"
    },
    {
        title: "The Life of Prophet Muhammad (Peace Be Upon Him) / The Sealed Nectar",
        author: "Safiur-Rahman Al-Mubarakpuri",
        yearOfPublication: 1976,
        coverColor: "Dark Green or Black",
        genre: "Seerah (Prophetic Biography)"
    },
    {
        title: "The Islamic Belief",
        author: "Sheikh Muhammad ibn Salih Al-Uthaymeen",
        yearOfPublication: 1983,
        coverColor: "Blue or Brown",
        genre: "Aqeedah (Islamic Theology)"
    },
    {
        title: "The Three Fundamental Principles",
        author: "Muhammad ibn Abdul-Wahhab (with explanations by Sheikh Salih Al-Fawzan)",
        yearOfPublication: "Original — 18th century (modern English editions 2013–2021)",
        coverColor: "Burgundy or Black",
        genre: "Tawheed (Fundamental Monotheism)"
    },
    {
        title: "Gardens of the Righteous (Abridged Edition)",
        author: "Imam Abu Zakariya An-Nawawi",
        yearOfPublication: "Original — 13th century (English single-volume editions 1999–2018)",
        coverColor: "Dark Blue or Black",
        genre: "Hadith Literature / Islamic Ethics"
    },
    {
        title: "Book of Tawheed (with explanations by Sheikh Salih Al-Fawzan)",
        author: "Muhammad ibn Abdul-Wahhab",
        yearOfPublication: "Original — 18th century (modern English editions 2010–2022)",
        coverColor: "Green or Black",
        genre: "Tawheed (Fundamental Monotheism)"
    }
];

const globalBeginnerIslamicBooks = [...beginnerIslamicBooks, ...beginnerEnglishIslamicBooks];

console.log(globalBeginnerIslamicBooks);

// Задание №8 Почитать про метод массива — map.
//  Написать функцию, которая принимает массив сущностей с задания №7.
//  Добавляем новое свойство для объекта "isRare (это редкий)"
//  и в зависимости от года выпуска книги,
//  устанавливаем true или false.

function checkRarity(booksArray) {
    return booksArray.map(function(book) {
        let isBookRare;

        if(typeof book.yearOfPublication === "string") {
            isBookRare = true;
        }
        else {
            isBookRare = false;
        }
        return {
            ...book,
            isRare: isBookRare
        };
    });
}

const processedBooks = checkRarity(globalBeginnerIslamicBooks);

console.log(processedBooks);