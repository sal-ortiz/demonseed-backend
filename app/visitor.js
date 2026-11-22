
const Model = require('../lib/model.js');
const Visit = require('./visit.js');


class Visitor extends Model {

  visits = [];

  constructor(ip, agent) {
    super(ip, agent);

    let data = this.load(this.id);

    this.visits = data['visits'] || [];
  }

  addVisit(start, end, exit) {
    let visit = new Visit(start, end, exit);

    this.visits.push(visit);
  }

  toJSON() {

    return {
      id: this.id,
      visits: this.visits,
    };

  }

  save() {
    Model.save(global.STATS_FILENAME, this.id, this.visits);
  }

  load(id) {
    let outp = Model.load(global.STATS_FILENAME, this.id);

    return outp;
  }

}


module.exports = Visitor;