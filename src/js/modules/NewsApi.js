// import { SearchInput } from './js/components/SearchInput'

export class NewsApi {
    constructor(input, options) {
        this.input = input;
        this.options = options;


        // form.addEventListener('submit', this.getNews.bind(this));
    }
    getNews() {

        console.log(this.input.value);
        console.log(this.options.to);
        console.log(this.options.from);
        return fetch(`${this.options.baseUrl}?q=${this.input.value}&apiKey=${this.options.apiKey}
        &pageSize=${this.options.pageSize}&to=${this.options.to}&from=${this.options.from}`, {
                // headers: {
                //     authorization: this.options.headers.authorization
                // }
            })
            .then((res) => {
                if (res.ok) {
                    console.log(res.status)
                    return res.json();
                }
                console.log(res.status)
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
            // .catch((err) => {
            //     console.log(err);
            // });
    }
}