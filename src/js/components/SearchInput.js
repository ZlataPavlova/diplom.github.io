import { NewsApi } from '../modules/NewsApi';
import { NewCardList } from './NewsCardList';

// import { index } from '../../index';

export class SearchInput {
    constructor(input, inputError, words, button, form, apiNews, newCardList, container, moreButton,
        notFound, resultCards, preloader) {
        this.words = words;
        this.input = input;
        this.inputError = inputError;
        this.button = button;
        this.form = form;
        this.apiNews = apiNews;
        this.newCardList = newCardList;
        this.container = container;
        this.moreButton = moreButton;
        this.notFound = notFound;
        this.resultCards = resultCards;
        this.preloader = preloader;
        form.addEventListener('submit', this._showPrelouder.bind(this));
        form.addEventListener('submit', this.searchResult.bind(this));
        input.addEventListener('input', this._setEventListenersInput.bind(this));
    }

    //Запись результата ответа с сервера в локальное хранилище
    searchResult() {
            event.preventDefault();
            this.apiNews.getNews().then((res) => {
                    console.log(res)
                    this.newCardList.reset(this.container);
                    localStorage.setItem(0, JSON.stringify(res)); //сохраняем результат запроса в локальное хранилище
                    localStorage.setItem(1, JSON.stringify(this.input.value)); //записали ключевое слово в локальное хранилище
                    this._showResult(res)
                    this.searchInLocalStorage()
                })
                .catch((err) => {
                    alert(err);
                });
        }
        //метод для работы с данными из локального хранилища. Получаем инфо и дальше передаем ее в класс для отрисовки карточек
    searchInLocalStorage() {
            const arrnews = localStorage.getItem(0); //получаем из локального хранилища нашу строку
            const resultSaveArr = JSON.parse(arrnews); // парсим обратно в объект
            const resultSave = resultSaveArr.articles.slice(0, 3);
            this.newCardList.render(this.container, resultSave) //передаю в класс по созданию карточек

        }
        // если ответ от API OK, показываем пользователю блок с карточками
    _showResult(res) {
        this.res = res
        this.resultCards.style.display = 'block';
        this.preloader.style.display = 'none'
        this.notFound.style.display = 'none';
        if (res.totalResults === 0) {
            this.resultCards.style.display = 'none';
            this.preloader.style.display = 'none'
            this.notFound.style.display = 'block';
        }
    }

    // в момент загрузки, показываем пользователю прелоудер
    _showPrelouder(isLoading) {
        console.log(isLoading)
        if (isLoading) {
            this.preloader.style.display = 'block';
            this.resultCards.style.display = 'none';
        }
    }

    //проверка input на наличие ключевого слова
    _checkInput() {
            return !(this.input.value.length === 0);
        }
        //добавление сообщения об отсутствии введенного ключевого слова
    _addErrorInput() {
        if (this._checkInput() === false) {
            this.inputError.textContent = this.words.ru.NoWord;

        }
    };
    //удаление сообщения об ошибке при наличии введенного ключевого слова
    _removeErrorInput() {
        if (this._checkInput() === true) {
            this.inputError.textContent = '';
        }
    };
    // активация и деактивация кнопки поиск в зависимости от того введенно ключевое слово или нет
    _setSubmitButtonState() {
            if (this._checkInput() === false) {
                this.button.setAttribute('disabled', '');
                this.button.classList.add('search__button_noActive');
                this.button.classList.remove('search__button_active');
            } else {
                this.button.removeAttribute('disabled');
                this.button.classList.remove('search__button_noActive');
                this.button.classList.add('search__button_active');
            }
        }
        //метод слушателей для поисковой строки
    _setEventListenersInput() {
        this.input.addEventListener('input', this._addErrorInput.bind(this));
        this.input.addEventListener('input', this._removeErrorInput.bind(this));
        this.input.addEventListener('input', this._checkInput.bind(this));
        this.input.addEventListener('input', this._setSubmitButtonState.bind(this));
    }

}