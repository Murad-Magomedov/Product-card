// - - - Уровень Первый - - - 

//  Задание №1 Создать массив чисел от 1 до 10.
//  Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers);

const filterArray = numbers.filter(number => number >= 5);
    console.log(filterArray);

//  Задание №2 Создать массив строк,
//  проверить есть ли в массиве какая-то определенная сущность.

const furnitureList = ["Диван", "Стул", "Кровать", "Стол", "Камод"];
const hasTable = furnitureList.includes("Стол");
    console.log(hasTable);

//  Задание №3 Написать функцию, которая аргументом будет принимать массив
//  и изменять его порядок на противоположный ("переворачивать").
//  Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseArrays = array => array.reverse();

reverseArrays(numbers);
reverseArrays(furnitureList);

    console.log(numbers);
    console.log(furnitureList);


// - - - Уровень Второй - - - 

//  Здание №1 Внедрить переменную из comments.js в homework-9.js

import {commentsArray} from './comments.js';
    console.log(commentsArray);

//  Задание №2 Вывести в консоль массив тех комментариев,
//  почта пользователей которых содержит ".com"

const comComments = commentsArray.filter(comment => comment.email.includes('.com'));
    console.log(comComments);

//  Задание №3 Перебрать массив таким образом,
//  что бы пользователи с id меньше или равно 5 имели postId: 2,
//  а те, у кого id больше 5, имели postId: 1

const updatedComments = commentsArray.map(com => ({
    ...com,
    postId: com.id <= 5 ? 2 : 1
}));

console.log(updatedComments);

//  Задание №4 Перебрать массив, что бы объекты состояли только из айди и имени

const shortComments = commentsArray.map(com => ({
    id: com.id,
    name: com.name
}));

console.log(shortComments);

//  Задание №5 Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
//  если длина тела сообщения (body) больше 180 символов - устанавливаем true,
//  меньше - false.

const checkedComments = commentsArray.map(comment => ({
    ...comment,
    isInvalid: comment.body.length > 180 ? true : false
}));

console.log(checkedComments);

// - - - Уровень Третий - - - 

//  Задание №1 Почитать про метод массива reduce. Используя его,
//  вывести массив почт и провернуть тоже самое с помощью метода map

const emailsArrayByReduce = commentsArray.reduce((acc, comment) => [...acc, comment.email], []);
    console.log(emailsArrayByReduce);

    // - - - - - - - - - -

const emailsArrayByMap = commentsArray.map(comment => comment.email);
    console.log(emailsArrayByMap);

    // Задание №3

const resultString = emailsArrayByReduce.toString();
    console.log(resultString);

const resultJoin = emailsArrayByMap.join(" ▶︎▶︎▶︎ ");
    console.log(resultJoin);