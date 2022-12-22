class ListHTML {
  constructor(api) {
    this.api = api;
    this.node = document.querySelector('#list');
    this.loader = document.querySelector('.loader');
    this.listItems = document.querySelectorAll('#list');
    this.name = document.querySelector('#name');
    this.score = document.querySelector('#score');

    document.querySelector('#refresh').addEventListener('click', () => {
      this.reLoad();
    });
  }

  get gamer() {
    return {
      name: this.name.value,
      score: this.score.value,
    };
  }

  set gamer(string) {
    this.name.value = string;
    this.score.value = string;
  }

  async reLoad() {
    this.listItems.forEach((element) => { element.style.display = 'none'; });
    this.loader.style.display = 'block';

    const list = await this.api.getList();
    if (!list.length) { return; }

    this.#removeAllChildNodes();

    list.forEach((element) => {
      const { user, score } = element;
      this.#addScore(user, score);
    });

    this.loader.style.display = 'none';
    this.listItems.forEach((element) => { element.style.display = 'block'; });
  }

    #addScore(name, score) {
    const li = document.createElement('li');
    li.innerHTML = `${name}:  ${score}`;
    li.setAttribute('id', 'li');

    this.node.appendChild(li);
  }

    #removeAllChildNodes() {
      while (this.node.firstChild) {
        this.node.removeChild(this.node.firstChild);
      }
    }
}

export default ListHTML;