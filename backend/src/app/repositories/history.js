'use strict';

const fs = require('fs/promises');
const path = require('path');

class HistoryRepository {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    const data = await fs.readFile(this.path).then((data) => data.toString());
    return this.parse(data);
  }

  async create(value, date) {
    const row = this.serializeRow(value, date) + '\n';
    await fs.appendFile(this.path, row);
  }

  parse(data) {
    const [, ...rows] = data.split('\n');
    return rows.map((row) => this.parseRow(row));
  }

  parseRow(row) {
    const [value, date] = row.split(',');
    return { value: Number.parseInt(value), date: new Date(date) };
  }

  serializeRow(value, date) {
    return `${value},${date.toISOString()}`;
  }
}

module.exports = new HistoryRepository(
  path.join(process.cwd(), 'src', 'data', 'history.csv')
);
