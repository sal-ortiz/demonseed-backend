
class Visit {

  #startTimestamp = 0;
  #endTimestamp = 0

  constructor(start, end) {
    this.#startTimestamp = start;
    this.#endTimestamp = end;
  }

  toJSON() {

    return {
      start: this.#startTimestamp,
      end: this.#endTimestamp,
    };

  }

}

module.exports = Visit;