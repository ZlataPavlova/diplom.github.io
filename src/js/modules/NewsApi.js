// import { SearchInput } from './js/components/SearchInput'

export class NewsApi {
    constructor(form, options) {
        this.options = options;
        this.form = form;
        console.log(this.form);
        // form.addEventListener('submit', this.getNews.bind(this));
    }
    getNews(input) {
        this.input = input;
        console.log(this.input);
        console.log(this.options.to);
        console.log(this.options.from);
        return fetch(`${this.options.baseUrl}?q=${this.input}&apiKey=${this.options.apiKey}
        &pageSize=${this.options.pageSize}&to=${this.options.to}&from=${this.options.from}`, {
                // headers: {
                //     authorization: this.options.headers.authorization
                // }
            })
            .then((res) => {
                if (res.ok) return res.json();
                return res.status;
            })

        .catch((err) => {
            console.log(err);
        });

    }
}