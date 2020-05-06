import "./analytics.css";
import { Statistics } from "./js/components/Statistics";

// import './image/аналитика.svg';
// import './image/воскресенье.svg';
// import './image/вторник.svg';
// import './image/ось диаграммы.svg';
// import './image/понедельник.svg';
// import './image/пятница.svg';
// import './image/среда.svg';
// import './image/суббота.svg';
// import './image/четверг.svg';
// import './image/Vector.svg';
// import './image/vk.svg';
const title = document.querySelector('.analytics-information__title');
const numberNews = document.querySelector('.analytics-information__text_news');
const numberTitle = document.querySelector('.analytics-information__text_title');
//константы для вставки количества ключевых слов на диаграмму
const columnValueOne = document.querySelector('.analytics-diagram__column__value_one');
const columnValueTwo = document.querySelector('.analytics-diagram__column__value_two');
const columnValueTree = document.querySelector('.analytics-diagram__column__value_three');
const columnValueFour = document.querySelector('.analytics-diagram__column__value_four');
const columnValueFive = document.querySelector('.analytics-diagram__column__value_five');
const columnValueSix = document.querySelector('.analytics-diagram__column__value_six');
const columnValueSeven = document.querySelector('.analytics-diagram__column__value_seven');
// константы для вывода дней недели
const columnDateOne = document.querySelector('.analytics-diagram__column__date_one');
const columnDateTwo = document.querySelector('.analytics-diagram__column__date_two');
const columnDateTree = document.querySelector('.analytics-diagram__column__date_three');
const columnDateFour = document.querySelector('.analytics-diagram__column__date_four');
const columnDateFive = document.querySelector('.analytics-diagram__column__date_five');
const columnDateSix = document.querySelector('.analytics-diagram__column__date_six');
const columnDateSeven = document.querySelector('.analytics-diagram__column__date_seven');
//константы для вывода диаграмм
const imageOne = document.querySelector('.analytics-diagram__column__image-one');
const imageTwo = document.querySelector('.analytics-diagram__column__image-two');
const imageTree = document.querySelector('.analytics-diagram__column__image-three');
const imageFour = document.querySelector('.analytics-diagram__column__image-four');
const imageFive = document.querySelector('.analytics-diagram__column__image-five');
const imageSix = document.querySelector('.analytics-diagram__column__image-six');
const imageSeven = document.querySelector('.analytics-diagram__column__image-seven');


const statistics = new Statistics(title, numberNews, numberTitle,
    columnValueOne, columnValueTwo, columnValueTree, columnValueFour, columnValueFive, columnValueSix, columnValueSeven,
    columnDateOne, columnDateTwo, columnDateTree, columnDateFour, columnDateFive, columnDateSix, columnDateSeven,
    imageOne, imageTwo, imageTree, imageFour, imageFive, imageSix, imageSeven);
statistics.showTitle();
statistics.inputInTitle();