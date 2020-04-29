import "./about.css";
// import './image/о_проекте.svg';
// import './images/avatar.jpg';
// import './image/css.svg';
// import './image/html.svg';
// import './image/js2.png';
// import './image/slider-back.png';
// import './image/slider-next.png';

import { swiper } from "./blocks/swiper-container/swiper";
import { CommitCard } from "./js/components/CommitCard";
import { CommitCardList } from "./js/components/CommitCardList";
import { GithubApi } from "./js/modules/GithubApi";

const commits = [];
const containerCommit = document.querySelector('.swiper-wrapper');
const apiGit = new GithubApi({
    baseUrl: 'https://api.github.com/repos/ZlataPavlova/diplom.github.io/commits',
    headers: {
        // authorization: '8cba67af78e94fcd8701bf17106dda68',
        'Content-Type': 'application/json',
    },


});
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(commitCard, containerCommit, apiGit);
apiGit.getCommits().then((res) => {
        console.log(res);
        //console.log(res.status);
        commitCardList.render(containerCommit, res)
    })
    .catch((err) => {
        alert(err);
    });