
const File = require("fs");

class Stats {

  static load(filename) {

    try {
      const raw = File.readFileSync(filename, 'utf8');
      const parsed = JSON.parse(raw);

      return parsed;

    } catch(err) {
      return {};
    }

  }

}


module.exports = Stats;