class APi {
  constructor() {
    this.baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.id = 'fOcMXcX3zXelN8pWmGDf';
  }

  get list() {
    return this.getList();
  }

  async getList() {
    const response = await fetch(
      `${this.baseUrl + this.id}/scores`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );

    const json = await response.json();
    return json.result;
  }

  async addScore(name, score) {
    const response = await fetch(
      `${this.baseUrl + this.id}/scores`,
      {
        method: 'POST',
        body: JSON.stringify({
          user: name,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );

    const json = await response.json();
    
    if (json.result !== 'Leaderboard score created correctly.') {
      throw new Error('could not add ');
    }
  }
}

export default APi;