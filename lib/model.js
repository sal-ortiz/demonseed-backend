
const Path = require('path');
const File = require('fs');
const Crypto = require('crypto');


class Model {

  id = '';

  constructor(...args) {
    this.id = Model.hash(...args);
  }

  static hash(...args) {

    let str = [...args].reduce((acc, arg) => {
      return acc + arg;
    }, '');

    let hash = Crypto.createHash('sha256').update(str)

    return hash.digest('hex');
  }

  static load(filename, id) {

    try {
      const raw = File.readFileSync(filename, 'utf8');
      const parsed = JSON.parse(raw);

      return parsed[id];

    } catch(err) {
      File.writeFileSync(filename, "{}", 'utf8');

      return {};
    }

  }

  static save(filename, id, data) {
    let parsed;

    try {
      let inp = File.readFileSync(filename, 'utf8');

      parsed = JSON.parse(inp);

    } catch(err) {
      parsed = {};
    }

    let obj = parsed[id] || {};

    obj['visits'] = data;
    parsed[id] = obj;

    const outp = JSON.stringify(parsed);

    File.writeFileSync(filename, outp, 'utf8');
  }

}

module.exports = Model;