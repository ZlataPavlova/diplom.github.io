export class GithubApi {
    constructor(options) {
        this.options = options;

    }
    getCommits() {
        return fetch(`${this.options.baseUrl}`, {
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

    }
}