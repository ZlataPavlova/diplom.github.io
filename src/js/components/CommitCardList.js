export class CommitCardList {
    constructor(commitCard, containerCommit, apiGit) {
        this.commitCard = commitCard;
        this.containerCommit = containerCommit;
        this.apiGit = apiGit;

    }

    addCommit(name, email, date, message, avatar_url) {


        this.containerCommit.appendChild(this.commitCard.create(name, email, date, message, avatar_url));

    }



    //перебор массива для создания 10 карточек при загрузке страницы
    render(containerCommit, commits) {

        this.containerCommit = containerCommit;
        this.commits = commits;
        console.log(commits);


        console.log(this.containerCommit);
        console.log(commits);
        commits.forEach((item) => this.addCommit(item.commit.committer.name, item.commit.committer.email, item.commit.committer.date, item.commit.message, item.author.avatar_url));

    }

};