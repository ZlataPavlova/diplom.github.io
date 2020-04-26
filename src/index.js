import "./style.css";


import './image/главная.svg';
import { NewsApi } from './js/modules/NewsApi';
import { SearchInput } from './js/components/SearchInput';
import { NewsCardList } from './js/components/NewsCardList';
import { NewsCard } from './js/components/NewsCard';

//import { analytics } from './analytics';



//валидация поиска и все что с этим связано
const form = document.querySelector('.search__form');
const input = document.querySelector('.search__input_text');
const inputError = document.querySelector('.search__input__error');
const inputButton = document.querySelector('.search__button');
const moreButton = document.querySelector('.search-result__button');
const container = document.querySelector('.search-result__container'); // место куда записывать карточки
const cards = [];
const words = {
    ru: {
        NoWord: 'Нужно ввести ключевое слово',
    }
};

const card = new NewsCard();

//formatDate.checkDate('publishedAt');
let d;
const apiNews = new NewsApi(form, {
    baseUrl: 'https://newsapi.org/v2/everything',
    headers: {
        // authorization: '8cba67af78e94fcd8701bf17106dda68',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),

    // q: searchInput.search(),
    apiKey: '8cba67af78e94fcd8701bf17106dda68 ',
    pageSize: '100',
    from: (new Date().getFullYear()) + '-' + '0' + (new Date().getMonth() + 1) + '-' + (new Date().getDate() - 7),
    to: new Date()
});

const newCardList = new NewsCardList(card, container, form);

const searchInput = new SearchInput(input, inputError, words, inputButton, form, apiNews, newCardList, container, moreButton);
// newCardList.reset();
// apiNews.getNews().then((result) => {
//     console.log(result);
//     newCardList.render(container, result)

// })




// const formSearch = document.forms.search__form;
// const inputValue = formSearch.elements.title.value;





// apiNews.getNews().then((result) => {
//     console.log(result)
// });





// import './image/avatar.jpg';
// import './image/card_1.png';
// import './image/card_2.png';
// import './image/card_3.png';
// import './image/card_4.png';
// import './image/card_5.png';
// import './image/card_6.png';

// import './image/git.svg';
// import './image/header.png';

// import './image/not-found_v1.svg';


// import './image/vk.svg';
// import './image/webpack.svg';