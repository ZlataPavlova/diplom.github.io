export class CommitCard {
    constructor(name, email, date, message, avatar_url) {
            this.name = name;
            this.email = email;
            this.date = date;
            this.message = message;
            this.avatar_url = avatar_url;
        }
        //метод с шаблоном комментария для html
    create(name, email, date, message, avatar_url) {
        let dates = new Date(date)
        const mounths = ['января', 'февраля', ' марта', 'апреля', 'мая', 'июня', ' июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        let days = dates.getDate();
        let month = mounths[dates.getMonth()];
        let years = dates.getFullYear();
        let number = days + month + ',' + ' ' + years

        console.log(name);
        console.log(email);
        console.log(date);
        console.log(message);
        console.log(avatar_url);
        //создаем разметку для карточек
        const swiperSlide = document.createElement('div');
        const swiperDate = document.createElement('p');
        const swiperImage = document.createElement('img');
        const swiperTitle = document.createElement('h3');
        const swiperEmail = document.createElement('p');
        const swiperInfo = document.createElement('p');
        // добавляем классы
        swiperSlide.classList.add('swiper-slide');
        swiperDate.classList.add('swiper__date');
        swiperDate.textContent = number; //дата карточки
        swiperImage.classList.add('swiper__image');
        swiperImage.setAttribute('src', avatar_url); // картинка для карточки
        swiperTitle.classList.add('swiper__title');
        swiperTitle.textContent = name; //имя автора
        swiperEmail.classList.add('swiper__email');
        swiperEmail.textContent = email; //email пользователя
        swiperInfo.classList.add('swiper__info');
        swiperInfo.textContent = message; //текст коммита

        // вкладываем блоки один в другой
        swiperSlide.appendChild(swiperDate);
        swiperSlide.appendChild(swiperImage);
        swiperSlide.appendChild(swiperTitle);
        swiperSlide.appendChild(swiperEmail);
        swiperSlide.appendChild(swiperInfo);

        return swiperSlide
    }

}