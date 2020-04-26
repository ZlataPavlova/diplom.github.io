import { NewsApi } from '../modules/NewsApi';
import { NewCardList } from './NewsCardList';

// import { index } from '../../index';

export class SearchInput {
    constructor(input, inputError, words, button, form, apiNews, newCardList, container, moreButton) {
        this.words = words;
        this.input = input;
        this.inputError = inputError;
        this.button = button;
        this.form = form;
        this.apiNews = apiNews;
        this.newCardList = newCardList;
        this.container = container;
        this.moreButton = moreButton;

        form.addEventListener('submit', this.showNotFound.bind(this));
        form.addEventListener('submit', this.showPrelouder.bind(this));
        form.addEventListener('submit', this.showResult.bind(this));
        form.addEventListener('submit', this.searchResult.bind(this));
        form.addEventListener('submit', this.search.bind(this));
        input.addEventListener('input', this.addErrorInput.bind(this));
        input.addEventListener('input', this.removeErrorInput.bind(this));
        input.addEventListener('input', this.checkInput.bind(this));
        input.addEventListener('input', this.setSubmitButtonState.bind(this));
        moreButton.addEventListener('click', this.showMoreButton.bind(this));
    }


    //передача ключевого слова в запрос API
    search() {
            event.preventDefault();

            localStorage.setItem(1, JSON.stringify(this.input.value)); //записали ключевое слово в локальное хранилище
            this.apiNews.getNews(this.input.value);

            this.newCardList.reset(this.container);
        }
        //Запись результата ответа с сервера в локальное хранилище и вызов метода класса построения карточек для построения карточек 
        // по данным из хранилища  
    searchResult() {
            this.apiNews.getNews(this.input.value).then((res) => {
                localStorage.setItem(0, JSON.stringify(res)); //сохраняем результат запроса в локальное хранилище
                let arr = localStorage.getItem(0); //получаем из локального хранилища нашу строку
                let resultSaveArr = JSON.parse(arr); // парсим обратно в объект
                let resultSave = resultSaveArr.articles.slice(0, 3);
                this.newCardList.render(this.container, resultSave) //передаю в класс по созданию карточек
            })
        }
        // если ответ от API OK, показываем пользователю блок с карточками
    showResult() {
            this.apiNews.getNews(this.input.value).then((res) => {
                document.querySelector('.search-result__cards').style.display = 'block';
                document.querySelector('.preloader').style.display = 'none'
                if (res.totalResults === 0) {
                    document.querySelector('.search-result__cards').style.display = 'none';
                    document.querySelector('.preloader').style.display = 'none'
                }
            })
        }
        // в момент загрузки, показываем пользователю прелоудер
    showPrelouder(isLoading) {
            if (isLoading) {
                document.querySelector('.preloader').style.display = 'block';
                document.querySelector('.search-result__cards').style.display = 'none';
            }
        }
        // если в ответе от api не содержится новостей выводим блок "ничего не найдено"
    showNotFound() {
            this.apiNews.getNews(this.input.value).then((res) => {
                if (res.totalResults === 0) {
                    document.querySelector('.search-result__not-found').style.display = 'block';
                    document.querySelector('.search-result__cards').style.display = 'none';
                    document.querySelector('.preloader').style.display = 'none';
                } else {
                    document.querySelector('.search-result__not-found').style.display = 'none';
                    document.querySelector('.search-result__cards').style.display = 'block';
                }
            })
        }
        //метод для работы кнопки "показать еще"
    showMoreButton() {
        let arr = localStorage.getItem(0);
        let resultSaveArr = JSON.parse(arr);
        let resultSplice = resultSaveArr.articles.splice(0, 3)
        let resultArr = resultSaveArr;
        localStorage.setItem(0, JSON.stringify(resultArr));
        let moreCard = resultArr.articles.slice(0, 3);
        //убираем кнопку если осталось меньше трех карточек в массиве
        if (resultArr.articles.length == 1 || resultArr.articles.length == 3) {
            this.moreButton.style.display = 'none';
        }
        this.newCardList.render(this.container, moreCard)
    }

    //проверка input на наличие ключевого слова
    checkInput() {
            return !(this.input.value.length === 0);
        }
        //добавление сообщения об отсутствии введенного ключевого слова
    addErrorInput() {
        if (this.checkInput() === false) {
            this.inputError.textContent = this.words.ru.NoWord;

        }
    };
    //удаление сообщения об ошибке при наличии введенного ключевого слова
    removeErrorInput() {
        if (this.checkInput() === true) {
            this.inputError.textContent = '';
        }
    };
    // активация и деактивация кнопки поиск в зависимости от того введенно ключевое слово или нет
    setSubmitButtonState() {
        if (this.checkInput() === false) {
            this.button.setAttribute('disabled', '');
            this.button.classList.add('search__button_noActive');
            this.button.classList.remove('search__button_active');
        } else {
            this.button.removeAttribute('disabled');
            this.button.classList.remove('search__button_noActive');
            this.button.classList.add('search__button_active');
        }
    }

}