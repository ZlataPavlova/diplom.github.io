import { index } from '../../index';
export class NewsCard {

    constructor(title, urlToImage, publishedAt, description, url, container, formatDate) {
            this.title = title;
            this.urlToImage = urlToImage;
            this.publishedAt = publishedAt;
            this.description = description;
            this.url = url;
            this.container = container;
            this.formatDate = formatDate;


        }
        //метод с шаблоном карточки для html
    create(title, urlToImage, description, url, name, publishedAt) {
        //переводим дату в нужный формат (в дальнейшем этот функционал будет в отдельном классе :))
        let date = new Date(publishedAt)
        const mounths = ['января', 'февраля', ' марта', 'апреля', 'мая', 'июня', ' июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        let days = date.getDate();
        let month = mounths[date.getMonth()];
        let years = date.getFullYear();
        let dates = days + month + ',' + ' ' + years
            //создаем разметку для карточек
        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardDate = document.createElement('p');
        const cardName = document.createElement('h3');
        const cardText = document.createElement('p');
        const cardLink = document.createElement('a');
        // добавляем классы
        card.classList.add('card');
        cardImage.classList.add('card__image');
        cardImage.setAttribute('src', urlToImage); // картинка для карточки
        cardDate.classList.add('card__date');
        cardDate.textContent = dates; //дата карточки
        cardName.classList.add('card__title');
        cardName.textContent = title; //название карточки
        cardText.classList.add('card__text');
        cardText.textContent = description; //текст карточки
        cardLink.classList.add('card__link');
        cardLink.classList.add('link');
        cardLink.setAttribute('href', url); //добавление ссылки на ресурс
        cardLink.setAttribute('target', "_blank"); //добавление атрибута для открытия ссылки в новой вкладке
        cardLink.textContent = name;
        // вкладываем блоки один в другой
        card.appendChild(cardImage);
        card.appendChild(cardDate);
        card.appendChild(cardName);
        card.appendChild(cardText);
        card.appendChild(cardLink);

        return card
    }

};