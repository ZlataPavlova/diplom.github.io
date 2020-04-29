import { NewsApi } from '../modules/NewsApi'
import { NewsCard } from './NewsCard'
import { SearchInput } from './SearchInput'

export class NewsCardList {
    constructor(card, container, moreButton) {
            this.card = card;
            this.container = container;

            this.moreButton = moreButton;

            moreButton.addEventListener('click', this._showMoreButton.bind(this));

        }
        //передаю в класс с шаблоном карточки и потом записываю получившийся результат в контейнер с карточками
    addCard(title, urlToImage, publishedAt, description, url, name) {
        this.container.appendChild(this.card.create(title, urlToImage, description, url, name, publishedAt));

    }

    //перебор массива для получения необходимы для карточек инфы
    render(container, cards) {
            this.container = container;
            this.cards = cards;
            cards.forEach((item) => this.addCard(item.title, item.urlToImage, item.publishedAt, item.description, item.url, item.source.name));
        }
        //очистка  контейнера с карточками при перезагрузке главной станицы
    reset(container) {
        this.container = container;
        //this.container.innerHTML = ''
        while (this.container.firstChild) this.container.removeChild(this.container.firstChild);
    }

    _showMoreButton() {

        const arr = localStorage.getItem(0);
        const resultSaveArr = JSON.parse(arr);
        const resultSplice = resultSaveArr.articles.splice(0, 3)
        const resultArr = resultSaveArr;
        localStorage.setItem(0, JSON.stringify(resultArr));
        const moreCard = resultArr.articles.slice(0, 3);
        //убираем кнопку если осталось меньше трех карточек в массиве
        if (resultArr.articles.length <= 3) {
            this.moreButton.style.display = 'none';
        }
        this.render(this.container, moreCard)
    }

};