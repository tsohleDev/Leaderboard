import './style.scss';
import ListHTML from "./modules/list.node.js";
import APi from "./modules/APi.js";

const api = new APi()
const listNode = new ListHTML(api)

document.querySelector('#submit').addEventListener('click', () => {
    const name = document.querySelector('#name').value
    const score = document.querySelector('#score').value
    console.log(name, score);
    api.addScore(name, score)
})