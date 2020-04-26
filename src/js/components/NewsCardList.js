import { NewsApi } from '../modules/NewsApi'
import { NewsCard } from './NewsCard'
import { SearchInput } from './SearchInput'

export class NewsCardList {
    constructor(card, container, form, formatDate) {
            this.card = card;
            this.container = container;
            this.form = form;

            this.formatDate = formatDate;

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
        this.container.innerHTML = ''

    }
};