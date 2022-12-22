import one from "../../images/dummy avatars/one.jpg";

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
    console.log(list);

    list.forEach((element, index) => {
      const { user, score } = element;
      
      const path = "../images/dummy avatars/"
      const picture = {
        1:'one.jpg'
      }
      this.#addScore(user, score, '');
      
    });

    this.loader.style.display = 'none';
    this.listItems.forEach((element) => { element.style.display = 'block'; });
  }

  #addScore(name, score, url) {
    
    const li = document.createElement('li');
    const img = document.createElement('img')
    img.src = one
    const nameTag = document.createElement('pre')
    nameTag.innerHTML = name
    const scoreTag = document.createElement('pre')
    scoreTag.innerHTML = score
    li.appendChild(img)
    li.appendChild(nameTag)
    li.appendChild(scoreTag)
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