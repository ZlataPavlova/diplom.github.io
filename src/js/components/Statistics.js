export class Statistics {
    constructor(title, numberNews, numberTitle,
            columnValueOne, columnValueTwo, columnValueTree, columnValueFour, columnValueFive, columnValueSix, columnValueSeven,
            columnDateOne, columnDateTwo, columnDateTree, columnDateFour, columnDateFive, columnDateSix, columnDateSeven,
            imageOne, imageTwo, imageTree, imageFour, imageFive, imageSix, imageSeven) {
            this.title = title;
            this.numberNews = numberNews;
            this.numberTitle = numberTitle;
            this.columnValueOne = columnValueOne;
            this.columnValueTwo = columnValueTwo;
            this.columnValueTree = columnValueTree;
            this.columnValueFour = columnValueFour;
            this.columnValueFive = columnValueFive;
            this.columnValueSix = columnValueSix;
            this.columnValueSeven = columnValueSeven;
            //
            this.columnDateOne = columnDateOne;
            this.columnDateTwo = columnDateTwo;
            this.columnDateTree = columnDateTree;
            this.columnDateFour = columnDateFour;
            this.columnDateFive = columnDateFive;
            this.columnDateSix = columnDateSix;
            this.columnDateSeven = columnDateSeven;
            //
            this.imageOne = imageOne;
            this.imageTwo = imageTwo;
            this.imageTree = imageTree;
            this.imageFour = imageFour;
            this.imageFive = imageFive;
            this.imageSix = imageSix;
            this.imageSeven = imageSeven;
        }
        //метод выводит запрос пользователя из поисковый строки на страницу аналитики
    showTitle() {
            const input = localStorage.getItem(1); //получаем из локального хранилища нашу строку
            const resultinput = JSON.parse(input);
            this.title.textContent = `Вы спросили: "${resultinput}"`;

        }
        //считаем  количество упоминаний ключевого слова в заголовках
    inputInTitle() {
            const input = localStorage.getItem(1).slice(1, -1); //берем из локального хранилища наше ключевое слово
            const local = localStorage.getItem(0); //возвращаем из лок.хранлища наши карточки с новостями
            const resultlocalStorage = JSON.parse(local); // парсим обратно в объект карточки с новостями
            const arrNews = resultlocalStorage.articles

            const arrTitles = [];
            //собираем массив из заголовков
            arrNews.forEach((item) => arrTitles.push(item.title))

            for (let i = 0; i < arrTitles.length; i++) {
                let regex = new RegExp(input, 'gi'); //задаем регулярное выражение для поиска ключевого слова в массиве заголовов
                let titileNumber = arrTitles.toString().match(regex).length;

                this._showTitileNumber(titileNumber);
            }
            this._showNewsNumber(arrNews);
            //отправляем массив с карточками в метод который выводит кол-во новостей
        }
        //метод, который отображает кол-во ключевых слов в заголовках
    _showTitileNumber(titileNumber) {

            this.numberTitle.textContent = `Упоминаний в заголовках:` + `${titileNumber}`;
        }
        //метод, который отображает кол-во новостей
    _showNewsNumber(arrNews) {
            this.numberNews.textContent = `Новостей за неделю: "${arrNews.length}"`;
            this._sortDate(arrNews)
        }
        //соритруем карточки с новостями по дням недели от текущей и на 7 дней назад
    _sortDate(arrNews) {
        this.arrNews = arrNews;
        //создадим массив с датами. С текущей даты на неделю назад
        const weeks = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date();
            const from = date.setDate(date.getDate() - i);
            console.log(from)
            weeks.push(date.toISOString().slice(0, -14));
            this._checkArr(weeks);
            this._sortWeek(weeks);
        }

    }
    _checkArr(weeks) {
        const input = localStorage.getItem(1).slice(1, -1); //получаем из локального хранилища нашу строку
        this.weeks = weeks;
        const local = localStorage.getItem(0); //возвращаем из лок.хранлища наши карточки с новостями
        const resultlocalStorage = JSON.parse(local); // парсим обратно в объект карточки с новостями
        const arrNews = resultlocalStorage.articles;
        //массивы для заполнения карточками с новостями за одну дату
        const newsDayOne = [];
        const newsDayTwo = [];
        const newsDayThree = [];
        const newsDayFour = [];
        const newsDayFive = [];
        const newsDaySix = [];
        const newsDaySeven = [];

        //кол-во ключевых слов в заголовках и статьях за первый день из массива с датами
        arrNews.forEach((item) => { if (item.publishedAt.slice(0, -10) == weeks[0]) { newsDayOne.push(item.title, item.description) } })

        for (let i = 0; i <= newsDayOne.length; i++) {
            const regex = new RegExp(input, 'gi'); //задаем регулярное выражение для поиска ключевого слова в массиве заголовов
            let numberNewsDayOne

            if (newsDayOne.length == 0 || newsDayOne.toString().match(regex) == null) {
                numberNewsDayOne = 0
            } else { numberNewsDayOne = newsDayOne.toString().match(regex).length; }
            this.imageOne.style.width = numberNewsDayOne * 10 + "px"; //строим столбец диаграммы
            this.columnValueOne.textContent = numberNewsDayOne; //выводим кол-во ключевого слова за день

        }

        //кол-во ключевых слов в заголовках и статьях за второй день из массива с датами
        arrNews.forEach((item) => { if (item.publishedAt.slice(0, -10) == weeks[1]) { newsDayTwo.push(item.title, item.description) } })

        for (let i = 0; i <= newsDayTwo.length; i++) {
            const regex = new RegExp(input, 'gi'); //задаем регулярное выражение для поиска ключевого слова в массиве заголовов
            let numberNewsDayTwo

            if (newsDayTwo.length == 0 || newsDayTwo.toString().match(regex) == null) {
                numberNewsDayTwo = 0
            } else { numberNewsDayTwo = newsDayTwo.toString().match(regex).length; }
            this.imageTwo.style.width = numberNewsDayTwo * 10 + "px"; //строим столбец диаграммы
            this.columnValueTwo.textContent = numberNewsDayTwo; //выводим кол-во ключевого слова за день

        }
        //кол-во ключевых слов в заголовках и статьях за третий день из массива с датами
        arrNews.forEach((item) => { if (item.publishedAt.slice(0, -10) == weeks[2]) { newsDayThree.push(item.title, item.description) } })

        for (let i = 0; i <= newsDayThree.length; i++) {
            const regex = new RegExp(input, 'gi'); //задаем регулярное выражение для поиска ключевого слова в массиве заголовов
            let numberNewsDayThree

            if (newsDayThree.length == 0 || newsDayThree.toString().match(regex) == null) {
                numberNewsDayThree = 0
            } else { numberNewsDayThree = newsDayThree.toString().match(regex).length; }
            this.imageTree.style.width = numberNewsDayThree * 10 + "px"; //строим столбец диаграммы
            this.columnValueTree.textContent = numberNewsDayThree; //выводим кол-во ключевого слова за день

        }
        //кол-во ключевых слов в заголовках и статьях за четвертый день из массива с датами
        arrNews.forEach((item) => { if (item.publishedAt.slice(0, -10) == weeks[3]) { newsDayFour.push(item.title, item.description) } })

        for (let i = 0; i <= newsDayFour.length; i++) {
            const regex = new RegExp(input, 'gi'); //задаем регулярное выражение для поиска ключевого слова в массиве заголовов
            let numberNewsDayFour

            if (newsDayFour.length == 0 || newsDayFour.toString().match(regex) == null) {
                numberNewsDayFour = 0
            } else { numberNewsDayFour = newsDayFour.toString().match(regex).length; }
            this.imageFour.style.width = numberNewsDayFour * 10 + "px"; //строим столбец диаграммы
            this.columnValueFour.textContent = numberNewsDayFour; //выводим кол-во ключевого слова за день

        }
        //кол-во ключевых слов в заголовках и статьях за пятый день из массива с датами
        arrNews.forEach((item) => { if (item.publishedAt.slice(0, -10) == weeks[4]) { newsDayFive.push(item.title, item.description) } })

        for (let i = 0; i <= newsDayFive.length; i++) {
            const regex = new RegExp(input, 'gi'); //задаем регулярное выражение для поиска ключевого слова в массиве заголовов
            let numberNewsDayFive

            if (newsDayFive.length == 0 || newsDayFive.toString().match(regex) == null) {
                numberNewsDayFive = 0
            } else { numberNewsDayFive = newsDayFive.toString().match(regex).length; }
            this.imageFive.style.width = numberNewsDayFive * 10 + "px"; //строим столбец диаграммы
            this.columnValueFive.textContent = numberNewsDayFive; //выводим кол-во ключевого слова за день

        }
        //кол-во ключевых слов в заголовках и статьях за шестой день из массива с датами
        arrNews.forEach((item) => { if (item.publishedAt.slice(0, -10) == weeks[5]) { newsDaySix.push(item.title, item.description) } })

        for (let i = 0; i <= newsDaySix.length; i++) {
            const regex = new RegExp(input, 'gi'); //задаем регулярное выражение для поиска ключевого слова в массиве заголовов
            let numberNewsDaySix

            if (newsDaySix.length == 0 || newsDaySix.toString().match(regex) == null) {
                numberNewsDaySix = 0
            } else { numberNewsDaySix = newsDaySix.toString().match(regex).length; }
            this.imageSix.style.width = numberNewsDaySix * 10 + "px"; //строим столбец диаграммы
            this.columnValueSix.textContent = numberNewsDaySix; //выводим кол-во ключевого слова за день

        }
        //кол-во ключевых слов в заголовках и статьях за седьмой день из массива с датами
        arrNews.forEach((item) => { if (item.publishedAt.slice(0, -10) == weeks[6]) { newsDaySeven.push(item.title, item.description) } })
            //console.log(newsDaySeven)
        for (let i = 0; i <= newsDaySeven.length; i++) {
            const regex = new RegExp(input, 'gi'); //задаем регулярное выражение для поиска ключевого слова в массиве заголовов
            let numberNewsDaySeven

            if (newsDaySeven.length == 0 || newsDaySeven.toString().match(regex) == null) {
                numberNewsDaySeven = 0
            } else { numberNewsDaySeven = newsDaySeven.toString().match(regex).length; }
            this.imageSeven.style.width = numberNewsDaySeven * 10 + "px"; //строим столбец диаграммы
            this.columnValueSeven.textContent = numberNewsDaySeven; //выводим кол-во ключевого слова за день

        }
    }
    _sortWeek(weeks) {
        this.weeks = weeks;


        const newWeek = weeks.map((item) => {
            const date = new Date(item)
            const nameDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

            const days = date.getDate();
            const name = nameDays[date.getDay()];
            const dates = days + ',' + name
            return dates
        })

        this._showWeek(newWeek);
    }


    _showWeek(newWeek) {
        this.columnDateOne.textContent = newWeek[0];
        this.columnDateTwo.textContent = newWeek[1];
        this.columnDateTree.textContent = newWeek[2];
        this.columnDateFour.textContent = newWeek[3];
        this.columnDateFive.textContent = newWeek[4];
        this.columnDateSix.textContent = newWeek[5];
        this.columnDateSeven.textContent = newWeek[6];

    }


}