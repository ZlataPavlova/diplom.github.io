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
                if (res.ok) return res.json();
                return res.status;
            })

        .catch((err) => {
            console.log(err);
        });

    }
}