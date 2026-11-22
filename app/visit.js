
class Visit {

  #startTimestamp = 0;
  #endTimestamp = 0
  #exitDestination = null;

  constructor(start, end, exit) {
    this.#startTimestamp = start;
    this.#endTimestamp = end;
    this.#exitDestination = exit;
  }

  toJSON() {

    return {
      start: this.#startTimestamp,
      end: this.#endTimestamp,
      dest: this.#exitDestination,
    };

  }

}

module.exports = Visit;