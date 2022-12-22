import './style.scss';
import ListHTML from './modules/list.node.js';
import APi from './modules/APi.js';

const api = new APi();
const listNode = new ListHTML(api);

document.querySelector('#submit').addEventListener('click', () => {
  const { name, score } = listNode.gamer;
  api.addScore(name, score);
});